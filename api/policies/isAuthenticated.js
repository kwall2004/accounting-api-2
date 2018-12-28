var jwt = require('express-jwt');

var authCheck = jwt({
  secret: new Buffer(sails.config.auth.clientSecret, 'base64'),
  audience: sails.config.auth.clientId
});

module.exports = authCheck;
