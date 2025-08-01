const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('../Assignment-11/routes/authRoutes');
const authMiddleware = require('./middleware/auth');

dotenv.config();
const app = express();

app.use(express.json());

// Public Routes
app.use('/api/auth', authRoutes);

// Protected Test Route
app.get('/api/profile', authMiddleware, (req, res) => {
  res.json({ message: `Welcome User ID: ${req.user.id}` });
});

// DB + Server
mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
}).catch(err => {
  console.error('MongoDB connection error:', err);
});
const seedCountries = require('./seeds/seedCountries');