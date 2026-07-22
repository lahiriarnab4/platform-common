const createLogger = ({ serviceName = 'platform-service' } = {}) => ({
  info: (...args) => console.info(`[${serviceName}]`, ...args),
  warn: (...args) => console.warn(`[${serviceName}]`, ...args),
  error: (...args) => console.error(`[${serviceName}]`, ...args)
});

module.exports = { createLogger, logger: createLogger() };
