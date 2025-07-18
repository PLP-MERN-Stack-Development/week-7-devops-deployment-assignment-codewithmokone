const express = require('express');
const authController = require('../controllers/authControllers');
const router = express.Router();

// Register
router.post('/register', authController.signup);
router.post('/login', authController.loginUser);

module.exports = router;