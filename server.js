const express = require('express');

const { notes } = require('./db/db');

const PORT = process.env.PORT || 3001;

const app = express();

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

app.get('/api/db', (req, res) => {
  let results = notes;
  res.json(results);
});

app.get('/api/db/:id', (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
