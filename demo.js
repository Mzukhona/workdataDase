const express = require('express');
const { Pool } = require('pg');
const path = require('path');


const app = express();
const port = 3000;
const cors = require('cors');

// PostgreSQL configuration
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '#Nqaba1233',
    port: 5432,
  });
console.log(pool);
// Express middleware for parsing JSON
app.use(express.json());
app.use(cors());
// GET endpoint to retrieve all workers

app.get('/getWorkers', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM workers');
      res.json({ success: true, data: result.rows });
    } catch (error) {
      console.error('Error fetching workers:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  })
 
  
  // POST endpoint to save a new worker
  app.post('/saveWorker', async (req, res) => {
    try {
      const { name, email, code } = req.body;
  
      // Use a parameterized query to prevent SQL injection
      const query = 'INSERT INTO workers (name, email, code) VALUES ($1, $2, $3) RETURNING *';
      const values = [name, email, code];
  
      const result = await pool.query(query, values);
  
      res.json({ success: true, data: result.rows[0] });
    } catch (error) {
        console.error('Error fetching workers:', error);
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  });
  
 // Serve static files from the 'web-build' directory
app.use(express.static(path.join(__dirname, 'web-build')));

// Serve 'index.html' for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'web-build', 'index.html'));
});


// Start the Express server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
