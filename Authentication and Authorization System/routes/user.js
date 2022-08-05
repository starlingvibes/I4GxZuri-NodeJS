const express = require('express');
const router = express();
const controller = require('../controllers/userController');
const checkAuth = require('../middleware/auth');

require('dotenv').config();

// registration
router.post('/register', controller.register);

// deleting a user
router.delete('/user/delete/:userID', checkAuth, controller.delete);

// logging in
router.post('/login', controller.login);

module.exports = router;
