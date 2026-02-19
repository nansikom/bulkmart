import dotenv from 'dotenv';
import pkg from 'pg';

dotenv.config();

const { Pool } = pkg;

const connectionString = process.env.DATABASE_URL;
const sslEnabled = process.env.DB_SSL === 'true';

// Create connection pool
export const pool = new Pool({
  connectionString,
  user: process.env.DB_USER ?? process.env.PGUSER,
  host: process.env.DB_HOST ?? process.env.PGHOST,
  database: process.env.DB_NAME ?? process.env.PGDATABASE,
  password: process.env.DB_PASSWORD ?? process.env.PGPASSWORD,
  port: Number(process.env.DB_PORT ?? process.env.PGPORT),
  ssl: sslEnabled ? { rejectUnauthorized: false } : undefined,
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