const express = require('express');
const router = express.Router();
const {sendMessage, getMessage} = require('../controllers/messageController');
const isAuthenticated = require('../middleware/isAuthenticated');

// routes
router.route("/send/:id").post(isAuthenticated,sendMessage);
router.route("/:id").get(isAuthenticated,getMessage);
module.exports = router;