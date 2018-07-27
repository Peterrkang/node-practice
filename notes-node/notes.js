console.log("Starting notes.js");

const addNote = (title, body) => {
  console.log("addNote ", title, body);
};

const getAll = () => {
  console.log("Getting All Notes");
};

module.exports = {
  addNote,
  getAll
};
