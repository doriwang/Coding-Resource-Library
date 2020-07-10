// Import Models
var db = require("../models");

// Import search tools
var searchTopics = require("../tools/searchTopics")
// Routes
module.exports = function (app) {
  //Establish a GET route
    app.get("/codeLibrary/topics/", function (req, res) {
        
        searchTopics(req.body)
        });
 };
