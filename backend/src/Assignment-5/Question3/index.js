const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { notFoundHandler, generalErrorHandler } = require('./middleware/errorHandler');

const app = express();
app.use(express.json());

// Route middleware
app.use('/api/users', userRoutes);

// Error middleware (order matters)
app.use(notFoundHandler);         // 404 fallback
app.use(generalErrorHandler);     // Final error handler

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
