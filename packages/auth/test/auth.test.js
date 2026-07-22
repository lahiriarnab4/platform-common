const test = require('node:test');
const assert = require('node:assert/strict');
const { createAuthenticateMiddleware } = require('../index');

test('returns 401 when no bearer token is provided', async () => {
  let nextCalled = false;
  const req = { headers: {} };
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    }
  };

  const authenticate = createAuthenticateMiddleware({
    verifyToken: async () => ({ ok: true })
  });

  await authenticate(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 401);
  assert.equal(nextCalled, false);
});

test('calls next when the token is verified', async () => {
  let nextCalled = false;
  const req = { headers: { authorization: 'Bearer abc123' } };
  const res = {
    statusCode: 200,
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      this.payload = payload;
      return this;
    }
  };

  const authenticate = createAuthenticateMiddleware({
    verifyToken: async () => ({ ok: true })
  });

  await authenticate(req, res, () => {
    nextCalled = true;
  });

  assert.equal(res.statusCode, 200);
  assert.equal(nextCalled, true);
});
