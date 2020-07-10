// Import Models
var db = require("../models");

// Import search tools
var searchTopics = require("../tools/searchTopics")
// Routes
module.exports = function (app) {
  //Establish a GET route
    app.get("/codeLibrary/topics/", function (req, res) {
        console.log("req:", req.query.topic);
        searchTopics(req.query.topic, function(result) {
            
            // res.render("index", result)
            // or
            res.json(result);
        })
        });
 };
