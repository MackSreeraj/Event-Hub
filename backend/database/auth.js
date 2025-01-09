// database/auth/auth.js
require('dotenv').config();  // Load environment variables from .env

const mongoose = require('mongoose');

// MongoDB URI from environment variable
const mongoURI = process.env.MONGO_URI;
console.log(mongoURI);  // Log all environment variables to see if .env is loaded

if (!mongoURI) {
  console.error("MongoDB URI is not defined in .env file!");
  process.exit(1);  // Exit if the URI is not set
  console.log(process.env.MONGO_URI);  // Log the MongoDB URI to confirm it's being loaded

}

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('Error connecting to MongoDB Atlas:', err));
