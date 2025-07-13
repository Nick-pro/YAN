// server.js
const express  = require('express');
const mongoose = require('mongoose');
const cors     = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser:    true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅  MongoDB connected'))
  .catch(err => console.error('❌  MongoDB connection error:', err));

// Routes
const memberRoutes = require('./routes/memberRoutes');
app.use('/api/members', memberRoutes);

const alumniRoutes = require('./routes/alumniRoutes');
app.use('/api/alumni', alumniRoutes);

const seedRoutes = require('./routes/seedRoutes');
// Mount at /api so that POST /api/seed matches router.post('/seed', …)
app.use('/api', seedRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀  Server running on port ${PORT}`));
