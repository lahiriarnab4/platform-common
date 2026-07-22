const createRequestContextMiddleware = () => (req, res, next) => {
  req.context = {
    ...(req.context || {}),
    requestId: req.headers['x-request-id'] || req.id || `req-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    startedAt: Date.now()
  };

  res.on('finish', () => {
    req.context.completedAt = Date.now();
  });

  return next();
};

module.exports = {
  createRequestContextMiddleware
};
