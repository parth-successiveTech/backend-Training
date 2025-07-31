const express = require('express');
const validator = require('./middleware/validator');

const app = express();
app.use(express.json());

app.post('/register', validator, (req, res) => {
  res.json({ message: 'User registered successfully!' });
});

app.post('/login', validator, (req, res) => {
  res.json({ message: 'Login successful!' });
});

app.post('/profile/update', validator, (req, res) => {
  res.json({ message: 'Profile updated!' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
