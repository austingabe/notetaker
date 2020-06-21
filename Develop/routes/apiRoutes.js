const noteData = require("../db.json");
const path = require("path");
const fs = require("fs");

module.exports = app => {
  app.get("/api/notes", (req, res) => {
    return res.json(noteData);
  });

  app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let id = Math.random() * 100;
    newNote.id = id;
    res.json(newNote);

    noteData.push(newNote);
    let updateNote = JSON.stringify(noteData);

    fs.writeFileSync(path.basename("/develop/db.json"), updateNote, err => {
      if (err) throw err;
    });
  });

  app.delete("/api/notes/:id", (req, res) => {
    fs.readFile(path.basename("/develop/db.json"), "utf8", (err, data) => {
      if (err) throw err;
      let allNotes = JSON.parse(data);
      const deleteNote = allNotes.find(notes => notes.id === parseInt(req.params.id));

      const notesIndex = allNotes.indexOf(deleteNote);

      allNotes.splice(notesIndex, 1);

      fs.writeFileSync(path.basename("/develop/db.json"), JSON.stringify(allNotes), (err, data) => {
        if (err) throw err;
        res.json(allNotes)
      });

    });

  });
};