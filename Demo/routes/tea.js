const express = require('express'); //import express

// 1.
const router = express.Router();
// 2.
const teaController = require('../controllers/tea');
// 3.
router.post('/tea', teaController.newTea);

router.get('/tea', teaController.getAllTea);

router.delete('/tea', teaController.deleteAllTea);

router.get('/tea/:name', teaController.getOneTea);

router.delete('/tea/:name', teaController.deleteOneTea);

// 4.
module.exports = router; // export to use in server.js