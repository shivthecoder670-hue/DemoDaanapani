const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  phone: String,
  eventType: String,
  date: String,
  guests: String,
  notes: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('EventEnquiry', eventSchema);
