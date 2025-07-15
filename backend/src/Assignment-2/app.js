
const express = require('express');
const app = express();
const port = 3000;

const mockUsers = require('./mockData'); // Import mock data

// GET API route
app.get('/api/users', (req, res) => {
  res.json(mockUsers); // Return the mock data as JSON
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
