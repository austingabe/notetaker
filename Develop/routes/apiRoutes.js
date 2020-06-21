const noteData = require("../db/db.json");
const express = require("express");
const fs = require("fs");
const router = express.Router();

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    return res.json(noteData);
  });

  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // Then the server saves the data to the tableData array)

  //form in the application - get the body info and put it into the form and send it to db.json. then refresh the browser so the db.json will appear with the new note that was added.
  //fs method that edits an already existing file
  // fs.appendFileSync('message.txt', 'data to append');
  //fs.writeFileSync
  //data capture in variable to pass through to json

  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let id = Math.random() * 100;
    newNote.id = id;
    res.json(newNote);

    noteData.push(newNote);
    let updateNote = JSON.stringify(noteData);

    fs.writeFileSync("db/db.json", updateNote, err => {
      if (err) throw err;
      console.log("Note Saved");
    });
  });

  app.delete("/api/notes:id", (req, res) => {
    fs.readFile(__dirname + "db/db.json", utf8, (err, data) => {
      if (err) throw err;
    let allNotes = JSON.parse(noteData);
    const deleteNote = allNotes.find(notes => notes.id === parseInt(req.params.id));

    const notesIndex = allNotes.indexOf(deleteNote);

    allNotes.splice(notesIndex, 1);

    fs.writeFileSync(__dirname + "db/db.json", JSON.stringify(allNotes), (err, data) => {
      if (err) throw err;
      res.json(allNotes)
    });

    });
    
  });
};