const getRequestId = (req) => req.headers?.['x-request-id'] || req.id || 'unknown';
const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

module.exports = { getRequestId, asyncHandler };
