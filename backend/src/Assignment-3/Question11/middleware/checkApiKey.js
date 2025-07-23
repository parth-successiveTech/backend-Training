const checkApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === 'secret123') {
    console.log("[API Check] Valid API Key");
    next();
  } else {
    console.log("[API Check] Invalid API Key");
    res.status(403).json({ message: "Forbidden: Invalid API Key" });
  }
};

module.exports = checkApiKey;
