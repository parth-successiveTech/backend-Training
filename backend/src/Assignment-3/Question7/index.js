const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("./MOCK_DATA.json");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
const port = 3000;
const secret_key = "dunnykey";

app.use(express.json());
app.post("/login", (req, res) => {
  const { username, password } = req.body;


  if (username === "admin" && password === "pass123") {
    const userPayload = { id: 1, username: "admin" };

    // Sign JWT token
    const token = jwt.sign(userPayload, secret_key, { expiresIn: "1h" });

    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid credentials" });
  }
});


app.post("/users/add", authMiddleware, (req, res) => {
  const { id, first_name, last_name, email, gender, ip_address } = req.body;

  const newuser = {
    id,
    first_name,
    last_name,
    email,
    gender,
    ip_address,
  };

  users.push(newuser);

  res.status(201).json({
    message: "New user added successfully!",
    user: newuser,
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
