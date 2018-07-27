console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
var command = process.argv[2];
console.log("Command: ", command);
console.log(process.argv);
console.log("===========================================");
console.log(argv);

if (command === "add") {
  console.log(`Adding new note`);
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") console.log(`Reading note`);
else if (command === "remove") console.log(`Removing note`);
else console.log(`command not recognized`);
