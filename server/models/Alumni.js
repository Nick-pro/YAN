const mongoose = require('mongoose');

const alumniSchema = new mongoose.Schema({
  name: String,
  currentRole: String,
  year: String,
  achievement: String
});

module.exports = mongoose.model('Alumni', alumniSchema);
