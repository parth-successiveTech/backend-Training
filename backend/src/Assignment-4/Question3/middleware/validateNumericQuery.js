const validateNumericQuery = (requiredParams = []) => {
  return (req, res, next) => {
    const invalidParams = [];

    requiredParams.forEach((param) => {
      const value = req.query[param];

      if (value === undefined) return; // Optional param, skip

      // Check if the value is not a number
      if (isNaN(value)) {
        invalidParams.push(param);
      }
    });

    if (invalidParams.length > 0) {
      return res.status(400).json({
        message: `Invalid query parameters: ${invalidParams.join(', ')}`,
        details: 'These parameters must be numeric.',
      });
    }

    next();
  };
};

module.exports = validateNumericQuery;
