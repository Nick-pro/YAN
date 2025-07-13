const express = require('express');
const router = express.Router();
const Alumni = require('../models/Alumni');

// GET all alumni
router.get('/', async (req, res) => {
  try {
    const alumni = await Alumni.find();
    res.json(alumni);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
