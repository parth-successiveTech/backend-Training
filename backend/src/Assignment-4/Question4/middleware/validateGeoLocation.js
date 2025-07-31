const geoip = require('geoip-lite');

/**

 * @param {Array} allowedCountries - e.g., ['IN', 'US']
 */
const validateGeoLocation = (allowedCountries = []) => {
  return (req, res, next) => {
    const ip =
      req.headers['x-forwarded-for']?.split(',').shift() || // for proxies
      req.socket?.remoteAddress;

    const geo = geoip.lookup(ip);

    if (!geo) {
      return res.status(403).json({
        message: 'Could not determine geographic location.',
      });
    }

    const country = geo.country;

    if (!allowedCountries.includes(country)) {
      return res.status(403).json({
        message: `Access denied from country: ${country}`,
      });
    }

    // All good
    next();
  };
};

module.exports = validateGeoLocation;
