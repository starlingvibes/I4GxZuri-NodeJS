const express = require('express');
const router = express();
const controller = require('../controllers/staffController');
const { verifyStaff } = require('../middleware/auth');

require('dotenv').config();

// registration
router.post('/staff/register', controller.staffRegister);

// deleting a user
router.delete('/staff/delete/:userID', verifyStaff, controller.staffDelete);

// logging in
router.post('/staff/login', controller.staffLogin);

module.exports = router;
