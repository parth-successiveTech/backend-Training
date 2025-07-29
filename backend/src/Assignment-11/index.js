const { auth, authorizeRoles } = require('./middleware/auth');

// Protected for any logged-in user
app.get('/api/profile', auth, (req, res) => {
  res.json({ message: `Welcome user: ${req.user.id}, role: ${req.user.role}` });
});

// Protected for ADMIN only
app.get('/api/admin/dashboard', auth, authorizeRoles('admin'), (req, res) => {
  res.json({ message: `Welcome to admin dashboard, ${req.user.id}` });
});

// Protected for USER or ADMIN
app.get('/api/user-or-admin', auth, authorizeRoles('user', 'admin'), (req, res) => {
  res.json({ message: `Accessible by user or admin` });
});