const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const jwtconfig = require('../../jwt-config');

exports.createToken = async function (user) {
    const token =jwt.sign({_id: user._id}, jwtconfig.secret);
    // user.tokens = user.tokens.concat({token});
    await user.save();
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





