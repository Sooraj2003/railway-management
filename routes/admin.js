const express = require('express');
const { verifyAdminApiKey } = require('../middleware/apiKeyMiddleware');
const { addTrain } = require('../controllers/adminController');
const router = express.Router();

router.post('/train', verifyAdminApiKey, addTrain);

module.exports = router;
