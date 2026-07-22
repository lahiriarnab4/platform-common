const createError = (message, status = 500) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

const handleError = (err, res) => {
  const status = err.status || 500;
  return res.status(status).json({ status, message: err.message || 'Internal Server Error' });
};

module.exports = { createError, handleError };
