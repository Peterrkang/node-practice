console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const title = {
  describe: "Title of note",
  demand: true,
  alias: "t"
};

const argv = yargs
  .command("add", "Add a new Note", {
    title,
    body: {
      describe: "Body of note",
      demand: true,
      alias: "b"
    }
  })
  .command("list", "list all notes")
  .command("read", "Read a note", {
    title
  })
  .command("remove", "Remove a note", {
    title
  })
  .help().argv;
var command = argv._[0];
console.log("Command: ", command);
console.log("Yargs:", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) notes.logNote(note);
  else console.log(`Note title taken`);
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  var note = notes.getNote(argv.title);
  if (note) notes.logNote(note);
  else console.log(`note not found`);
} else if (command === "remove") {
  var noteRemoved = notes.removeNote(argv.title);
  noteRemoved ? console.log(`note removed`) : console.log("note not found");
} else console.log(`command not recognized`);
