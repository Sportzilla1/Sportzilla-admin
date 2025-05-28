// server/routes/tournaments.js
const express = require('express');
const Tournament = require('../models/Tournament');
const router = express.Router();

router.post('/register', async (req, res) => {
  const { name, email, game } = req.body;
  const tournament = new Tournament({ name, email, game });
  await tournament.save();
  res.json({ success: true });
});

module.exports = router;
