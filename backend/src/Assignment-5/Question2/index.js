const express = require('express');

const createError = require('http-errors');

const app = express();

app.use((req, res, next) => {

  next(createError(404, 'Not Found'));

});

const port = process.env.PORT || 3000;

app.listen(port, () => {

  console.log(`Server is running on port ${port}`);

});