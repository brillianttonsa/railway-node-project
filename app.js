import express from 'express';
import ejs from 'ejs';
import { Client } from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // To use environment variables

const app = express();
const port = process.env.PORT || 3000;

// Database setup
const db = new Client({
  connectionString: process.env.SUPABASE_URL,
  ssl: {
    rejectUnauthorized: false, // For Railway PostgreSQL SSL connection
  },
});

db.connect();

// Set EJS as the template engine
app.set("view engine", "ejs");

// Basic route
app.get("/", (req, res) => {
  res.render("home");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
