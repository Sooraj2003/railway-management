const express = require('express');
const { verifyToken } = require('../middleware/authMiddleware');
const { getSeatAvailability, bookSeat } = require('../controllers/userController');
const router = express.Router();

router.get('/seats', verifyToken, getSeatAvailability);
router.post('/book', verifyToken, bookSeat);

module.exports = router;
