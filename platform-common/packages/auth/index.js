const createAuthenticateMiddleware = ({ verifyToken }) => async (req, res, next) => {
  try {
    const token = req.headers?.authorization?.replace(/^Bearer\s*/, '');
    if (!token) {
      return res.status(401).json({ status: 401, message: 'Token is required' });
    }

    const verification = await verifyToken(token, req);
    if (verification?.ok === false) {
      return res.status(401).json({ status: 401, message: verification.message || 'Token verification failed' });
    }

    req.auth = {
      ...(req.auth || {}),
      token,
      verified: true,
      verification
    };

    return next();
  } catch (error) {
    return res.status(error.status || 401).json({
      status: error.status || 401,
      message: error.message || 'Error in token verification'
    });
  }
};

module.exports = {
  createAuthenticateMiddleware
};
