const requestLogger = (req, res, next) => {
  console.log(`[Logger] ${req.method} ${req.originalUrl}`);
  next();
};

module.exports = requestLogger;
