const userController = require('../controllers/user.contorller');
// const authController = require('../controllers/auth.controller');
const express = require('express');
// const verifyToken = require('../middleware/auth');

const userRoutes = express.Router();

// userRoutes
//   .get('/me', userController.getMe)  
//   .post('/me/update', verifyToken, authController.updateUser); 

module.exports = userRoutes;