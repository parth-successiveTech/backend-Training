const errorHandler = (err, req, res, next) => {
  console.error(`Error: ${err.message}`); // Log error for debugging

  // Send structured error response
  res.status(err.statusCode || 500).json({
    error: {
      message: err.message || "Internal Server Error",
      status: err.statusCode || 500,
    },
  });
};

module.exports = errorHandler;
