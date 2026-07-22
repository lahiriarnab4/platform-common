const sendSuccess = (res, payload, status = 200) => res.status(status).json(payload);
const sendError = (res, error, status = 500) => res.status(status).json({ status, message: error.message || 'Internal Server Error' });

module.exports = { sendSuccess, sendError };
