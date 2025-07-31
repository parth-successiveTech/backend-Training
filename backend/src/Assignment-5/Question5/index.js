const express = require('express');
const app = express();

// Asynchronous route with intentional error
app.get('/async-error', async (req, res, next) => {
  try {
    // Simulate an async operation (like DB call)
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error('Something went wrong in async route!'));
      }, 1000);
    });

    // This line won't be reached
    res.send('This will not be executed');

  } catch (error) {
    // Pass error to error handling middleware
    next(error);
  }
});

// Global error handler middleware
app.use((err, req, res, next) => {
  console.error('Error caught:', err.message);

  res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
    error: err.message
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
