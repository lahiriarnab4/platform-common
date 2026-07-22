const authorize = (requiredRoles = []) => (req, res, next) => {
  const userRoles = req.auth?.roles || [];
  const allowed = requiredRoles.every((role) => userRoles.includes(role));

  if (!allowed) {
    return res.status(403).json({ status: 403, message: 'Forbidden' });
  }

  return next();
};

module.exports = { authorize };
