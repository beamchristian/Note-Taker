const express = require('express');

const { notes } = require('./db/db');

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api/db', (req, res) => {
  let results = notes;
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
