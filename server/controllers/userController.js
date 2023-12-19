const userModel = require('../models/userModel');

//add new user to the database
const addUser = async (req, res) => {
    try {
        const newUser = new userModel(req.body);
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Fetch list of all users from database
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await userModel.find();
        res.json(allUsers);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//Check if user has already paid
const checkPaymentStatus = async (req, res) => {
    try {
      const { mobile } = req.body;
      const user = await userModel.findOne({ mobile });
  
      if (user) {
        res.json({ hasPaid: true, paymentDate: user.createdAt });
      } else {
        res.json({ hasPaid: false, paymentDate: null });
      }
    } catch (error) {
      console.error('Error checking payment status:', error.message);
      res.status(500).json({ error: error.message });
    }
  };

//Fetch payment details of a user from database
  const getReceiptDetails = async (req, res) => {
    try {
        const { mobile } = req.params;
        const receiptDetails = await userModel.findOne({ mobile });

        if (receiptDetails) {
            res.json(receiptDetails);
        } else {
            res.status(404).json({ error: 'Receipt details not found for the provided mobile number.' });
        }
    } catch (error) {
        console.error('Error fetching receipt details:', error.message);
        res.status(500).json({ error: error.message });
    }
};
  

module.exports = {
    addUser,
    getAllUsers,
    checkPaymentStatus,
    getReceiptDetails
}