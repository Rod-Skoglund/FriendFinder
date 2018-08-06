// =============================================================
// Dependencies
// =============================================================
var express = require("express");
// const app = require('express')();
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
const routes = require("./app/routing/htmlRoutes");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// =============================================================
//  Connect all our routes to this application
// =============================================================
app.use('/', routes);

// =============================================================
// Friend Finders (DATA)
// =============================================================


// =============================================================
// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
