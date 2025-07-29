const express = require('express');
const validateNumericQuery = require('./middleware/validateNumericQuery');

const app = express();
const port = 3000;

// Example route: /filter?age=25&score=90
app.get('/filter', validateNumericQuery(['age', 'score']), (req, res) => {
  res.json({
    message: 'Query parameters are valid and numeric',
    data: req.query,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
