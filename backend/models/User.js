// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phoneNumber: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true } // Added username field
});

userSchema.post('validate', function(error, doc, next) {
    console.log("User model validation errors:", error);
    next(error);
});

// Check if the model already exists
const User = mongoose.models.User || mongoose.model('User', userSchema);

module.exports = User;