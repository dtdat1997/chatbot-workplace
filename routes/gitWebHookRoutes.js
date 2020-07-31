const express = require('express');
const router = express.Router();
const webHookController = require('../controllers/webHookController');
const authController = require('./../controllers/authController');

router
    .route('/')
    .get(webHookController.validateWHGit)
    .post(webHookController.receivedWHGit);

module.exports = router;
