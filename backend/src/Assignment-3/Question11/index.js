const express = require("express");
const requestLogger = require("./middleware/requestLogger");
const checkApiKey = require("./middleware/checkApiKey");

const app = express();
const port = 3000;
app.get(
  "/secure-data",
  requestLogger,     
  checkApiKey,       
  (req, res) => {   
    res.json({ message: "You accessed secure data!" });
  }
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
