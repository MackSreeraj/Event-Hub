const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Event Schema
const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  capacity: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Event = mongoose.model('Event', eventSchema);

// POST route to create event
router.post('/create', async (req, res) => {
  try {
    const {
      title,
      description,
      date,
      time,
      location,
      price,
      category,
      image,
      capacity
    } = req.body;

    // Combine date and time
    const eventDateTime = new Date(`${date}T${time}`);

    const newEvent = new Event({
      title,
      description,
      date: eventDateTime,
      location,
      price: parseFloat(price),
      category,
      image,
      capacity: parseInt(capacity)
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);

  } catch (error) {
    console.error('Event creation error:', error);
    res.status(500).json({ error: 'Failed to create event' });
  }
});

// GET route to retrieve all events from DB
router.get('/all', async (req, res) => {
  try {
    const events = await Event.find().sort({ createdAt: -1 });
    res.status(200).json(events);
  } catch (error) {
    console.error('Error retrieving events:', error);
    res.status(500).json({ error: 'Failed to retrieve events' });
  }
});

module.exports = router;