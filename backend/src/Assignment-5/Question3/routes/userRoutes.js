const express = require('express');
const router = express.Router();
const Joi = require('joi');
const createError = require('http-errors');

router.post('/register', (req, res, next) => {
  const schema = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return next(createError(400, error.details[0].message));
  }

  res.status(201).json({ message: 'User registered successfully' });
});

module.exports = router;
