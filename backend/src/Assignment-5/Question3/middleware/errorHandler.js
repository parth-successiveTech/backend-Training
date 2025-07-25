const createError = require('http-errors');

// 404 Not Found
const notFoundHandler = (req, res, next) => {
  next(createError(404, 'Route Not Found'));
};

// General error handler
const generalErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
};

module.exports = { notFoundHandler, generalErrorHandler };
