const express = require("express");
const rateLimiter = require("./middleware/rateLimiter");

const app = express();
const port = 3000;

app.use(rateLimiter(5, 15 * 1000));

app.get("/", (req, res) => {
  res.send("Welcome! You are within the rate limit.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
