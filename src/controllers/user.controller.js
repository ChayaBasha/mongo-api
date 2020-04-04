const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const {createToken, findByUserCredentials} = require('../services/auth.service');


exports.registerUser = async function(req, res) {
  const encryptPassword = await bcrypt.hash(req.body.password, 8);
  const newUser = new User({...(req.body), password:encryptPassword});
  await createToken(newUser);
  newUser.save(function(err, data) {
    if (err) {
      res.send(err);
    }

    res.json(data);
  });
};

exports.login = async function(req, res) {
  try{
  const user = await findByUserCredentials(req.body.userName, req.body.password);
  if(!user) {
    return res.status(400).send('Not a valid login/password');
  }
  const token = await createToken(user);
  res.send({user, token});
} catch (err) {
  res.status(400).send('Not a valid login/password');
}
};

exports.getUser = function(req, res) {
  User.findById(req.params.userId, function(err, data) {
    if (err) {
      res.send(err);
    } else if (data) {
      const {userName, birthMonth, birthYear} = data;
      res.json({userName, birthMonth, birthYear});
    } else {
      res.status(400).send("No user")
    }
  });
};

exports.updateUser = function(req, res) {
  User.findOneAndUpdate(
    { _id: req.user._id },
    req.body,
    { new: true },
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.send('succesfully updated');
    }
  );
};

exports.deleteUser = function(req, res) {
  User.deleteOne({ _id: req.params.userId }, function(err) {
    if (err) {
      res.send(err);
    }
    res.json({ msg: 'User has been deleted.' });
  });
};