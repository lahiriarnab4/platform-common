const rateLimit = (options = {}) => {
  const windowMs = options.windowMs || 60 * 1000;
  const maxRequests = options.maxRequests || 100;
  const store = new Map();

  return (req, res, next) => {
    const key = req.ip || 'unknown';
    const now = Date.now();
    const entry = store.get(key) || { count: 0, resetAt: now + windowMs };

    if (now > entry.resetAt) {
      entry.count = 0;
      entry.resetAt = now + windowMs;
    }

    entry.count += 1;
    store.set(key, entry);

    if (entry.count > maxRequests) {
      return res.status(429).json({ status: 429, message: 'Too many requests' });
    }

    return next();
  };
};

module.exports = { rateLimit };
