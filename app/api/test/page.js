import { Client } from "pg";

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",         // 👈 your pgAdmin username
  password: "pgdb", // 👈 the password you set in pgAdmin
  database: "ehr-app"     // or "postgres"
});

console.log("url = ", process.env.DATABASE_URL);

async function main() {
  //const client = new Client({
    //connectionString: process.env.DATABASE_URL,
    // ssl: { rejectUnauthorized: false }, // enable if your DB provider requires SSL
  //});

  try {
    await client.connect();
    console.log("✅ Connected to Postgres!");

    const res = await client.query("SELECT NOW()");
    console.log("Server time is:", res.rows[0]);

  } catch (err) {
    console.error("❌ Connection error:", err);
  } finally {
    await client.end();
  }
}

main();