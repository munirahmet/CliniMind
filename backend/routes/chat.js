const express = require('express');
const { sendMessage } = require('../controllers/geminiController');
const router = express.Router();

router.post('/', sendMessage);

module.exports = router;
