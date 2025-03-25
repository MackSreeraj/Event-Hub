// backend/routes/register.js
const express = require('express');
const User = require('../models/User'); // Adjust the path if necessary
const router = express.Router();

router.post('/user', async (req, res) => {
    console.log("Incoming request body:", req.body);
    const { name, email, password, phoneNumber } = req.body;
    try {
        const existingUser = await User.findOne({ phoneNumber });
        if (existingUser) {
            return res.status(409).json({ message: 'Phone number already exists' });
        }
        const newUser = new User({ name, password, email, phoneNumber });
        await newUser.save();
        return res.status(200).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error("Error during user registration:", error);
        return res.status(500).json({ message: 'Error registering user', error });
    }
});

module.exports = router;