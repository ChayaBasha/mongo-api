const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwtconfig = require('../../jwt-config');

exports.createToken = function (user, expiresIn) {
    const token =jwt.sign({_id: user._id}, jwtconfig.secret, {expiresIn});
    return token;
  };

exports.findByUserCredentials = async function (userName, password) {
  
    const user = await User.findOne({userName});
    console.log(JSON.stringify(user));
    if(!user) {
      throw new Error('User name and password not recognized');  
    };
    const passwordMatch = await bcrypt.compare(password, user.password);
    if(!passwordMatch) {
        throw new Error('User name and password not recognized');
    }
    return user;
};





