// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function(app) {
  // ROUTE TO /SURVEY
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
// ROUTE TO LANDING PAGE
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};