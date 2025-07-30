const express = require('express');
const createError = require('http-errors');
const app = express();

app.use(express.json());

// ✅ 200 OK
app.get('/ok', (req, res) => {
  res.status(200).json({ message: 'Everything is OK' });
});

// ✅ 201 Created
app.post('/create', (req, res) => {
  res.status(201).json({ message: 'Resource created' });
});

// ❌ 400 Bad Request
app.post('/bad-request', (req, res, next) => {
  const { name } = req.body;
  if (!name) return next(createError(400, 'Name is required'));
  res.send('OK');
});

// ❌ 401 Unauthorized
app.get('/unauthorized', (req, res, next) => {
  next(createError(401, 'No token provided'));
});

// ❌ 403 Forbidden
app.get('/forbidden', (req, res, next) => {
  next(createError(403, 'Access denied'));
});

// ❌ 404 Not Found
// Automatically triggered if no route matches

// ❌ 405 Method Not Allowed
app.all('/only-get', (req, res, next) => {
  if (req.method !== 'GET') {
    return next(createError(405, 'Only GET is allowed'));
  }
  res.send('GET request successful');
});

// ❌ 409 Conflict
app.post('/register', (req, res, next) => {
  const { email } = req.body;
  if (email === 'test@example.com') {
    return next(createError(409, 'User already exists'));
  }
  res.send('Registered');
});

// ❌ 422 Unprocessable Entity
app.post('/validate', (req, res, next) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return next(createError(422, 'Invalid email format'));
  }
  res.send('Valid input');
});

// 💥 500 Internal Server Error
app.get('/crash', (req, res, next) => {
  throw new Error('Something went wrong!');
});

// 💥 501 Not Implemented
app.get('/not-implemented', (req, res, next) => {
  next(createError(501, 'This route is not implemented yet'));
});

// 💥 503 Service Unavailable
app.get('/maintenance', (req, res, next) => {
  next(createError(503, 'Service is down for maintenance'));
});

// 🔁 404 fallback
app.use((req, res, next) => {
  next(createError(404, 'Route not found'));
});

// 🔧 Error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    status: err.status || 500,
    message: err.message || 'Internal Server Error',
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
