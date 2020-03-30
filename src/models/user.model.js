  
//imports 
const mongoose = require('mongoose');

//set up
const Schema = mongoose.Schema;

// Create our user Schema (this should match the front end object properies)
const userSchema = new Schema({
  firstName: {
      type: String,
  },
  lastName: {
    type: String,
  },
  userName: {
    type: String,
    required: 'As user name is required to register'
  },
  password: {
    type: String,
    required: 'A password is required to register',
    minlength: 8

  },
  tokens: [{
      token: {
          type: String,
          required: true
      }
  }],
  
  birthMonth: {
      type: [
      {
          type: Number,
          enum: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }
      ],
    },

  birthYear: {
    type: Number,
  }
});

module.exports = mongoose.model('User', userSchema);