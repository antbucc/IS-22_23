const express = require('express'); //import express

// 1.
const router = express.Router();

const authController = require('../controllers/auth.controller');


router.post('/auth/signup', authController.signup);

// 4.
module.exports = router; // export to use in server.js