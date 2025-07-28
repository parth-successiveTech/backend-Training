const rateLimiter = (limit, windowMs) => {
  const requestCounts = new Map(); 

  return (req, res, next) => {
    const ip = req.ip;
    const now = Date.now();

    if (!requestCounts.has(ip)) {
      requestCounts.set(ip, []);
    }

    const timestamps = requestCounts.get(ip);

    const recentRequests = timestamps.filter(ts => now - ts < windowMs);
    requestCounts.set(ip, recentRequests);

    if (recentRequests.length >= limit) {
      return res.status(429).json({
        message: `Too many requests. Please wait and try again.`,
      });
    }

    
    recentRequests.push(now);
    next();
  };
};

module.exports = rateLimiter;
