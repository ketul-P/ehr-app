import 'dotenv/config';
import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  connectionTimeoutMillis: 5000, // 5s timeout
});

export async function GET() {
  try {
    await client.connect();
    const res = await client.query('SELECT NOW()');
    console.log('✅ Connected:', res.rows[0]);
  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await client.end();
  }
}

GET();
