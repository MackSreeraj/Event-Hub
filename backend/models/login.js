// backend/models/login.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./User'); // Import the User model
const app = express();
app.use(bodyParser.json());

app.post('/user', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email, password });
        if (user) {
            const token = { email: user.email };
            return res.status(200).json(token);
        }
        return res.status(401).json({ message: 'Invalid username or password' });
    } catch (error) {
        return res.status(500).json({ message: 'Error logging in', error });
    }
});

app.get('/email/user', async (req, res) => {
  const { email } = req.query;
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(404).json({ message: 'User not found' });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching user data', error });
  }
});

module.exports = app;