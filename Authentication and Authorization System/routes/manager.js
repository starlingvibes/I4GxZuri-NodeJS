const express = require('express');
const router = express();
const controller = require('../controllers/managerController');
const { verifyManager } = require('../middleware/auth');

require('dotenv').config();

// registration
router.post('/manager/register', controller.managerRegister);

// deleting a user
router.delete(
  '/manager/delete/:userID',
  verifyManager,
  controller.managerDelete
);

// logging in
router.post('/manager/login', controller.managerLogin);

// fetching all users
router.get('/managers', controller.managerFetch);

module.exports = router;
