const fs = require('fs');
const path = require('path');

function filterByQuery(query, notesArray) {
  let titleArray = [];
  let filteredResults = notesArray;
  if (query.title) {
    if (typeof query.title === 'string') {
      titleArray = [query.title];
    } else {
      titleArray = query.title;
    }
    console.log(titleArray);
    titleArray.forEach(titles => {
      filteredResults = filteredResults.filter(
        note => note.title.indexOf(titles) !== -1
      );
    });
  }
  if (query.text) {
    filteredResults = filteredResults.filter(note => note.text === query.text);
  }
  if (query.name) {
    filteredResults = filteredResults.filter(note => note.name === query.name);
  }
  return filteredResults;
}

function findById(id, notesArray) {
  const result = notesArray.filter(note => note.id === id)[0];
  return result;
}

function createNewNote(body, notesArray) {
  const note = body;
  notesArray.push(note);
  fs.writeFileSync(
    path.join(__dirname, '../db/notes.json'),
    JSON.stringify({ notes: notesArray }, null, 2)
  );
  return note;
}

function validateNote(note) {
  if (!note.name || typeof note.name !== 'string') {
    return false;
  }
  if (!note.title || typeof note.title !== 'string') {
    return false;
  }
  if (!note.text || typeof note.text !== 'string') {
    return false;
  }
  return true;
}

module.exports = {
  filterByQuery,
  findById,
  createNewNote,
  validateNote,
};
