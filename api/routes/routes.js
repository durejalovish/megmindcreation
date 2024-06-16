const express = require('express');
const controller = require('../../controllers/user.controller');

const router = express.Router();

// GET
router.get('/test', controller.getUsers);


module.exports = router;