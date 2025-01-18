const express = require('express');
const router = express.Router();
const {register,login,logout,getOtherUser} = require('../controllers/userController');
const isAuthenticated = require('../middleware/isAuthenticated');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/').get(isAuthenticated,getOtherUser);
module.exports = router;