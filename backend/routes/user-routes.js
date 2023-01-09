const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getLoggedUser } = require('./../controllers/userController');
const { protect } = require('../middlewares/authMiddleware');

// user registration route
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/logged-user', protect, getLoggedUser);

module.exports = router;
