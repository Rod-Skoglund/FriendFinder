const routes = require('express').Router();

// =============================================================
// Define basic routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
routes.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

routes.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

// // Displays all characters
// routes.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// // Displays a single character, or returns false
// routes.get("/api/characters/:character", function(req, res) {
//   var chosen = req.params.character;

//   console.log(chosen);

//   for (var i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.json(false);
// });

// // Create New Characters - takes in JSON input
// routes.post("/api/characters", function(req, res) {
//   // req.body hosts is equal to the JSON post sent from the user
//   // This works because of our body-parser middleware
//   var newcharacter = req.body;

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newcharacter);

//   characters.push(newcharacter);

//   res.json(newcharacter);
// });


module.exports = routes;