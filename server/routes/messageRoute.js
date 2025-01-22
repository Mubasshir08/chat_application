const express = require('express');
const router = express.Router();
const sendMessage = require('../controllers/messageController');
const isAuthenticated = require('../middleware/isAuthenticated');

// routes
router.route("/send/:id").post(isAuthenticated,sendMessage)