const express = require('express');
const validateUser = require('./middleware/validateUser');

const app = express();
app.use(express.json());

app.post('/register', validateUser, (req, res) => {
  const { username, email } = req.body;
  res.status(201).json({
    message: 'User registered successfully!',
    user: { username, email },
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
