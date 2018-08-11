// ************************************************************
// Program: Friend Finder App
// Author: Rod Skoglund
// File: htmlRoutes.js
// ************************************************************

var routes = require('express').Router();
var path = require("path");

// ************************************************************
// Define basic routes
// ************************************************************

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

}; // end module.exports = function(app)
