// server/models/member.js
const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name:   { type: String, required: true },
  role:   { type: String, required: true },
  bio:    { type: String, required: true },
  avatar: { type: String, required: true },
  color:  { type: String, required: true },
}, {
  timestamps:  true,    // adds createdAt / updatedAt
  versionKey:  false,   // removes the __v field entirely
});

module.exports = mongoose.model('Member', memberSchema);
