var express = require('express');
var router = express.Router();

// Assuming you have a database connection and Event model
var Event = require('../models/event'); // Adjust the path as necessary

router.post('/create', async function(req, res, next) {
  try {
    const { title, description, date, time, location, price, category, image, capacity } = req.body;
    const newEvent = new Event({
      title,
      description,
      date,
      time,
      location,
      price,
      category,
      image,
      capacity
    });
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully' });
  } catch (error) {
    next(error);
  }
});

module.exports = router;