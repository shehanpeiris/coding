// Dependencies
// ===========================================================
var express = require("express");

var app = express();
var PORT = 3000;

// Data
// ===========================================================
var characters = [{
  routeName: "yoda",
  name: "Yoda",
  role: "Jedi Master",
  age: 900,
  forcePoints: 2000
}, {
  routeName: "darthmaul",
  name: "Darth Maul",
  role: "Sith Lord",
  age: 200,
  forcePoints: 1200
}, {
  routeName: "obiwankenobi",
  name: "Obi Wan Kenobi",
  role: "Jedi Master",
  age: 55,
  forcePoints: 1350
}];

// Routes
// ===========================================================

app.get("/", function(req, res) {
  res.send("Welcome to the Star Wars Page!");
});

// What does this route do? Returns the characters object
app.get("/api/characters", function(req, res) {
  return res.json(characters);
});

// What does this route do? Returns the character object for the specific character you type in
app.get("/api/characters/:character", function(req, res) {
  // What does this code do? Grabs whatever you type in the ":character" field
  var chosen = req.params.character;
  console.log(chosen);

  // What does this code do? Loops through characters object to see if there's an array with the routeName = your typed in character
  for (var i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  // What does this code do?
  return res.send("No character found");
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
