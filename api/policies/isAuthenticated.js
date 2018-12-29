var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://kwall2004.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://accounting-api/',
  issuer: 'https://kwall2004.auth0.com/',
  algorithms: ['RS256']
}, function (err, req, res, next) {
  if (!err) {
    return next;
  }

  return res.status(401).json(err);
});

module.exports = authCheck;
