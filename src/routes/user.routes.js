const userController = require('../controllers/user.controller');
const express = require('express');
const verifyToken = require('../middleware/auth');

const userRoutes = express.Router();

userRoutes 
  .post('/', userController.registerUser)
  .post('/update', verifyToken, userController.updateUser) 
  .get('/:userId', userController.getUser)
  .post('/login', userController.login)
  .delete('/:userId', userController.deleteUser);
module.exports = userRoutes;

