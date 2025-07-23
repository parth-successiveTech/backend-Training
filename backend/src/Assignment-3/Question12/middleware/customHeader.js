// This middleware returns another function that adds the header
const customHeader = (headerName, headerValue) => {
  return (req, res, next) => {
    res.setHeader(headerName, headerValue);
    next();
  };
};

module.exports = customHeader;
