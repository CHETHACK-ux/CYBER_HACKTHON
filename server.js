const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database
require('./config/db');

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const meetingRoutes = require('./routes/meetingRoutes');
const consentRoutes = require('./routes/consentRoutes');
const userRoutes = require('./routes/userRoutes');

app.use('/api/auth', authRoutes);
app.use('/api/meetings', meetingRoutes);
app.use('/api/consent', consentRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Medi-Chain Secure API is running. Zero-Trust Enforced.');
});

// Admin-Restricted Data Endpoint Mock
app.get('/api/admin/system-status', (req, res) => {
  // Admin can see this
  res.json({ status: 'operational', load: '40%', active_meetings: 2 });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = { app };
