const router = require('express').Router();
const Reservation = require('../models/reservation');

router.post('/', async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json({ message: "Reservation saved" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save reservation" });
  }
});

router.get('/', async (req, res) => {
  const data = await Reservation.find().sort({ createdAt: -1 });
  res.json(data);
});

module.exports = router;
