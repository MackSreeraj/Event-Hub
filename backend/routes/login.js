// backend/routes/login.js
const express = require('express');
const router = express.Router();
const loginApp = require('../models/login');

router.use('/', loginApp);

module.exports = router;