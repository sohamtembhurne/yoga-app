const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Route to get all users (created for debugging)
router.get('/', userController.getAllUsers);

//Route to add a new user
router.post('/', userController.addUser);

//Route to check payment status
router.post('/checkPayment', userController.checkPaymentStatus);

//Route to fetch user details
router.get('/receipt/:mobile', userController.getReceiptDetails);

module.exports = router;
