const jwt = require('jsonwebtoken');

const secret = 'merlin'
const expiration = '24h';

module.exports = module.exports = {
    signToken: function ({ username, _id }) {
      const payload = { username, _id };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
  };
  