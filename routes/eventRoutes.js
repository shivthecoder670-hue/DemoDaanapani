const router = require('express').Router();
const EventEnquiry = require('../models/EventEnquiry');

router.post('/', async (req, res) => {
  try {
    const event = new EventEnquiry(req.body);
    await event.save();
    res.status(201).json({ message: "Event enquiry saved" });
  } catch {
    res.status(500).json({ error: "Failed to save enquiry" });
  }
});

router.get('/', async (req, res) => {
  const data = await EventEnquiry.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
