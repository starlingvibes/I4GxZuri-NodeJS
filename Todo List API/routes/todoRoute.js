const express = require('express');
const controller = require('../controllers/todoController');

const router = express.Router();

// configuring the API routes
router.get('/', controller.fetch);
router.get('/:id', controller.fetchid);
router.post('/add', controller.add);
router.post('/update/:id', controller.update);
router.delete('/update/:id', controller.delete);

module.exports = router;
