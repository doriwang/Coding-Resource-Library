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

    // Establish a put route
    app.put("/codeLibrary/update/:id", function(req, res) {
      db.codeResource.update(
        req.query.data,
        {where: req.params.id}
      )
      .then(function(result) {
        if(result.changedRows == 0) {
          return res.status(404).end();
      } else {
          res.status(200).end();
      }
      })
    });

    // Establish a delete route
    app.delete("/codeLibrary/delete/:id", function(req, res) {
      db.codeResource.delete(
        {where: req.params.id}
      )
      .then(function(result) {
        if(result.affectedRows == 0) {
          // if no rows were changed, then the ID must not exist, so 404
          return res.status(404).end();
        } else {
          res.status(200).end();
        }

      })
    })
 };
