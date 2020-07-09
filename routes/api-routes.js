/ Import Models
var db = require("../models");
// Routes
module.exports = function (app) {
  //Establish a GET route
  app.get("/codeLibrary", function (req, res) {
    //Get all existing entries from database
    db.CodeResource.findAll().then(function (result) {
      res.json(result);
      console.log(result);
    });
  });
  //Establish a POST route
  app.post("/codeLibrary", function (req, res) {
    // Store body of request in a variable
    var newResource = req.body;
    //Create new resource in Code Library
    db.CodeResource.create(newResource).then(function (result) {
      res.json(result);
    });
  });
};