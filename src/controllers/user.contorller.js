const User = require('../models/user.model');

exports.getAllUsers = function(req, res) {
  User.find({}, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.getUser = function(req, res) {
  User.findById(req.params.userId, function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.createUser = function(req, res) {
  const newUser = new User({...req.body}); //if mongo validates properly this should work to get what was entered by the user when registering
  
  newUser.save(function(err, data) {
    if (err) {
      res.send(err);
    }
    res.json(data);
  });
};

exports.updateUser = function(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    function(err, data) {
      if (err) {
        res.send(err);
      }
      res.json(data);
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