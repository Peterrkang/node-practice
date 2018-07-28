const fs = require("fs");

console.log("Starting notes.js");

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (err) {
    return [];
  }
};

const saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

const addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var dupNotes = notes.filter(note => note.title === title);
  if (dupNotes.length === 0) {
    notes.push(note);
    return note;
  }
};

const getAll = () => {
  var notes = fetchNotes();

  notes.forEach(note => logNote(note));
};

const getNote = title => {
  var notes = fetchNotes();

  return notes.filter(note => note.title === title)[0];
};

const removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

const logNote = note => {
  debugger;
  console.log(note.title + " " + note.body);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
