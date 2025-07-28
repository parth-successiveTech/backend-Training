const express = require("express");
const errorHandler = require("./middleware/errorHandler"); // ⬅ import error middleware

const app = express();
const port = 3000;

app.use(express.json());
app.get("/fail", (req, res, next) => {
  try {
    throw new Error("Something broke in /fail route!");
  } catch (err) {
    err.statusCode = 400;
    next(err);
  }
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
