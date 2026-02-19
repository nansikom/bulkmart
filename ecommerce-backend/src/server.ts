import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { pool } from './db/index.js';

dotenv.config();
interface CartItem {
  id:number;
  quantity:number;
}
const app = express();
app.use(cors());
app.use(express.json());

app.get("/", async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.send(`Backend + Postgres is running. Time: ${result.rows[0].now}`);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});
app.get("/products", async (req: Request, res: Response) => {
  try {
    //if someone calls the /products api end point it will try to run this sql query
    const result = await pool.query('SELECT * FROM products');
    res.send(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});
app.get("/products/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM products WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Product not found');
    }
    res.send(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});
app.get("/products/category/:category", async (req: Request, res: Response) => {
  const { category } = req.params;
  try {
    const result = await pool.query(`
      SELECT 
      p.name,
      p.category,
      p.description,
      p.cover,
      json_agg(
        json_build_object(
          'id',  p.id,
          'size', p.size,
          'price', p.price,
          'stock', p.stock
        )
    ) AS sizes,
     MIN(p.stock) AS min_stock
      FROM products p
      WHERE p.category ILIKE $1
      GROUP  BY  p.name, p.category, p.description, p.cover
      ORDER BY p.name
    `, [category]);
    const products = result.rows.map(row => ({
      ...row,
      stock_warning: row.min_stock <=10 ? 'Almost out of stock!' :null
    }));
    res.json(products);
  } catch (err) {
    console.error(err);
    res.status(500).send('Database error');
  }
});
app.post("/reduce-stock", async (req: Request, res: Response) => {
  const  cartItems:CartItem[]  = Array.isArray(req.body) ? req.body : req.body.cartItems; // Expecting an array of { id, quantity }

  try {
    const lowStockItems: string[] = [];
    await Promise.all(cartItems.map(async (item:CartItem) => {
      await pool.query(
        'UPDATE products SET stock = GREATEST(stock - $1, 0) WHERE id = $2',
        [item.quantity, item.id]
      );
      // Get product info price and name get the price that matches the selected id
      const productRes = await pool.query('SELECT name, stock, price FROM products WHERE id = $1', [item.id]);
      const product = productRes.rows[0];

      // 3. Insert into sales
      const totalPrice = product.price * item.quantity;
      await pool.query(
        'INSERT INTO sales (product_id, product_name, quantity_sold, total_price, sold_at) VALUES ($1, $2, $3, $4, $5)',
        [item.id, product.name, item.quantity, totalPrice, new Date()]
      );
      if (product.stock < 8){
        const msg = `${product.name} (ID: ${item.id}) - Stock left: ${product.stock}`;
        console.warn("⚠️ Low stock alert:", msg);
        lowStockItems.push(msg);
      } 
    }));
    return res.json({ success: true, lowStockItems });
  } catch (err:any) {
    console.error(err);
    res.status(500).json({success: false, error: 'Error reducing stock', details: err.message });
  }
});
// Reduce stock endpoint given by the id and quantity
app.get("/analytics/top-products", async (req: Request, res: Response) => {
  try {
    //query to get the id ,name, quantity sold and total revenue of top 10 products grouped by id and name based on top most quantity sold
    const result = await pool.query(`
      SELECT product_id, product_name, SUM(quantity_sold) AS total_quantity,
              SUM(total_price) AS total_revenue
      FROM sales
      GROUP BY product_id, product_name
      ORDER BY total_quantity DESC
      LIMIT 10
    `);
    res.json(result.rows);
  } catch (err){
    console.error(err);
    res.status(500).send('Database error');
  }
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));