const express = require('express');
const router = express.Router();
const { addNewUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/add', authMiddleware, addNewUser);

module.exports = router;
