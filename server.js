// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const tournamentRoutes = require('./routes/tournaments');
const authMiddleware = require('./middleware/auth');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/tournaments', tournamentRoutes);

app.get('/admin', authMiddleware, (req, res) => {
  res.send('Welcome to the Admin Panel');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
