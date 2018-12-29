var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var check = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://kwall2004.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://accounting-api/',
  issuer: 'https://kwall2004.auth0.com/',
  algorithms: ['RS256']
});

module.exports = function (req, res, next) {
  return check(req, res, function(err) {
    if (!err) {
      return next();
    }

    return res.status(err.status).json(err.inner);
  })
};
