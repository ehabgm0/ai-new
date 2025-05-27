const express = require('express');
const router = express.Router();

// Placeholder route for ratings
router.get('/', (req, res) => {
  res.send('Ratings route');
});

module.exports = router;