// LINK TO FRIENDS.JS
var friendsData = require("../data/friends");

// ROUTING
module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    if (friendsData.length < 5) {
      friendsData.push(req.body);
      res.json(true);
    }
  });

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    friendsData = [];
    console.log(friendsData);
  });
};