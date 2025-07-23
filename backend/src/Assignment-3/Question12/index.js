const express = require("express");
const customHeader = require("./middleware/customHeader");

const app = express();
const port = 3000;

// Add a custom header to every response
app.use(customHeader("X-Powered-By", "Node.js-Magic"));

app.get("/", (req, res) => {
  res.send("Hello! Check the custom header in the response.");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
