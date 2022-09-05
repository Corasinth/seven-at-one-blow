const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/seven-at-one-blow', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = mongoose.connection;