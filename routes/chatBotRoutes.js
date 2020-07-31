const express = require('express');
const router = express.Router();
const chatBotController = require('../controllers/chatBotController');
const authController = require('./../controllers/authController');

// Protect all routes after this middleware
router.use(authController.protect);

router.post('/send', chatBotController.sendMessage);
router.post('/webhook', chatBotController.webhook);

module.exports = router;
