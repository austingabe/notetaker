const noteData = require("../db/db.json");
const express = require("express");
const fs = require("fs");
const router = express.Router();



module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/notes", function(req, res) {
    return res.json(noteData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  //form in the application - get the body info and put it into the form and send it to db.json. then refresh the browser so the db.json will appear with the new note that was added.
  //fs method that edits an already existing file
  // fs.appendFileSync('message.txt', 'data to append');
  //fs.writeFileSync
  //data capture in variable to pass through to json

  app.post("/api/notes", (req, res) => {
    let note = req.body
    
    // req.body (whatever in the notes) is available since we're using the body parsing middleware
  });
};