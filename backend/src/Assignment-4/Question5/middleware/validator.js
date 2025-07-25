const Joi = require('joi');

module.exports = {
  '/register': Joi.object({
    username: Joi.string().alphanum().min(3).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(new RegExp('^[a-zA-Z0-9]{6,30}$'))
      .required(),
  }),

  '/login': Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  }),

  '/profile/update': Joi.object({
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    age: Joi.number().min(1).max(120).optional(),
  }),
};
