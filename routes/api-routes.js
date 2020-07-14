// Import Models

var db = require("../models");
// Routes
module.exports = function (app) {
  //Establish a GET route
  app.get("/codeLibrary", function (req, res) {
    //Get all existing entries from database
    db.CodeResource.findAll().then(function (result) {
      res.json(result);
    });
  });

  app.get("/category", function (req, res) {
    //Get all existing entries based on category

    const category = req.query.category;
    console.log(category);

    db.CodeResource.findAll({
      where: {
        category: category,
      },
    }).then(function (result) {
      res.json(result);
      // console.log(result);
    });
  });

  //Establish a POST route
  app.post("/codeLibrary", function (req, res) {
    // Store body of request in a variable
    var newResource = req.body;
    console.log(newResource);
    //Create new resource in Code Library
    db.CodeResource.create({
      ...newResource
    }).then(function (result) {
      res.json(result);
    });
  });
};