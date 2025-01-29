const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer'); // Import multer config
const { register, login, logout, getOtherUser } = require('../controllers/userController');
const isAuthenticated = require('../middleware/isAuthenticated');

// Register Route with file upload
router.route('/register').post(upload.single('profilePic'), register); // Handle file upload
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/').get(isAuthenticated, getOtherUser);

module.exports = router;
