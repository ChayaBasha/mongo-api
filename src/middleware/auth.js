const jwt = require('jsonwebtoken');
const jwtconfig = require('../../jwt-config');
const {createToken} = require('../services/auth.service');

module.exports = async function (req, res, next) {
    const authHeader = req.headers['auth-token'] || req.headers['authorization'];
    const token = authHeader.split('Bearer ')[1]; 

    if (!token) {
        res.status(401).send({auth: false, msg: 'You are not Authorized. Token Error' });
    }

    try {
        const verified = jwt.verify(token, jwtconfig.secret);
        req.user = verified;
        const expiresIn = 3600; 
        const accessToken = await createToken(verified, expiresIn);
        res.header('access_token', accessToken);
        next();
    } catch (err) {
        console.log(err);
        res.status(403).send({ msg: 'Invalid Token' });
    }
};