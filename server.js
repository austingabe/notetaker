// Dependency
const express = require("express");

// Sets up Express app
const app = express();
// Sets dynamic port
const PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Sets up static files
app.use(express.static(__dirname + "/public"));

// API & HTML routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// Listener starts the server
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
  });