const jwt = require('jsonwebtoken');

const secret = 'merlin'
const expiration = '24h';

module.exports = module.exports = {
    signToken: function ({ email, username, _id }) {
      const payload = { email, username, _id };
      return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
  };
  