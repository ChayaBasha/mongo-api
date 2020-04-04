// const jwt = require('jsonwebtoken');
// const jwtconfig = require('../jwt-config');
// const User = require('../models/user.model');

// module.exports = function(req, res, next) {
//     const token = req.headers['auth-token'];

//     if (!token) {
//         res.status(401).send({msg: 'You are not Authorized'});
//     }

//     try {
//         const verfied = jwt.verify(token, jwtconfig.secret);
//         req,user = verified;
//         next();
//     } catch (err) {
//         res.status(400).send({msg:'Invalid Token'});
//     }
// };