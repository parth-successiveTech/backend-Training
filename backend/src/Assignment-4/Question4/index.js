const express = require('express');
const validateGeoLocation = require('./middleware/validateGeoLocation');

const app = express();
const port = 3000;

// Allow only India (IN) and US requests
app.use(validateGeoLocation(['IN', 'US']));

app.get('/', (req, res) => {
  res.send('Access granted based on geographic location!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
