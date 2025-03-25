// backend/routes/register.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User', {
  name: String,
  username: String,
  email: String,
  password: String,
  phoneNumber: String,
  registrationDate: Date,
});

router.post('/user', async (req, res) => {
  console.log("Incoming request body:", req.body);
  const { name, email, password, phoneNumber, username } = req.body;
  try {
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(409).json({ message: 'Phone number already exists' });
    }
    const newUser = new User({ name, password, email, phoneNumber, username, registrationDate: new Date() });
    await newUser.save();
    return res.status(200).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error("Error during user registration:", error);
    return res.status(500).json({ message: 'Error registering user', error });
  }
});

module.exports = router;