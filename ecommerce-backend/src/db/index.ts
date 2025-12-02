import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

// Create connection pool
export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

// Test connection function
export const testConnection = async (): Promise<boolean> => {
  try {
    const client = await pool.connect();
    console.log('✅ Connected to PostgreSQL database');
    
    // Test query
    const result = await client.query('SELECT version()');
    console.log('📊 PostgreSQL Version:', result.rows[0].version);
    
    client.release();
    return true;
  } catch (error) {
    console.error('❌ Database connection failed:', error);
    return false;
  }
};

// Initial connection test
pool.connect()
  .then(() => console.log('✅ Database pool connected'))
  .catch(err => console.error('❌ Error connecting to the database', err));