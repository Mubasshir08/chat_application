const express = require('express');
const router = express.Router();
const register = require('../controllers/userController');
const login = require('../controllers/userController');

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;