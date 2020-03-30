const controllers = require('../controllers/user.contorller');
const express = require('express');

const userRoutes = express.Router();
// Routes if there is nothing added to the Path

userRoutes
  .get('/', controllers.getAllUsers) // This will let us get all the users that are in the database 
  .post('/', controllers.createUser); // This will let us add new users to the database 

// Routes if you are adding the userID at the end of the Path 
userRoutes
  .get('/:userId', controllers.getUser)
  .post('/:userId', controllers.updateUser)
  .delete('/:userId', controllers.deleteUser);

module.exports = userRoutes;