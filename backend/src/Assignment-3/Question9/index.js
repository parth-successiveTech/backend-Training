const express = require("express");
const logger = require("./middleware/logger"); // Import the logger

const app = express();
const port = 3000;

app.use(express.json());

// 🟢 Apply logger middleware globally
app.use(logger);

app.get("/", (req, res) => {
  res.send("Welcome to the API!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
