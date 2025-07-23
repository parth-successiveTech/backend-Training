const express = require('express');
const router = express.Router();
const User = require('../models/User');

// GET /api/users - fetch all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find(); // fetches all documents from "users" collection
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
