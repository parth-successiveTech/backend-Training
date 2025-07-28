const jwt = require('jsonwebtoken');
const secret_key = 'dunnykey';

const login = (req, res) => {
  const { username, password } = req.body;

  // Dummy login check
  if (username === "admin" && password === "pass123") {
    const userPayload = { id: 1, username: "admin" };
    const token = jwt.sign(userPayload, secret_key, { expiresIn: "1h" });

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

module.exports = { login };
