// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const db = require("./db/db.json")

// Sets up Express app
const app = express();
// Sets dynamic port
const PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up static files
app.use(express.static("public"));

// API & HTML routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);




app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });