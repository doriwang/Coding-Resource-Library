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

  // dori adds code here
  // create a findOne query
  app.get("/findOne/:id", function (req, res) {

    db.CodeResource.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (result) {
      res.json(result)
    })
  })
  // dori codes end here

  //Establish a POST route
  app.post("/codeLibrary/post", function (req, res) {
    // Store body of request in a variable
    var newResource = req.body;
    console.log(newResource);
    //Create new resource in Code Library
    db.CodeResource.create({
      ...newResource,
    }).then(function (result) {
      res.json(result);
    });
  });

  app.put("/codeLibrary/update/:id", function (req, res) {
    var changeResource = req.body;
    console.log("44", req.body);

    db.CodeResource.update(changeResource, {
      where: {
        id: req.params.id,
      },
    }).then(function (result) {
      res.json(result);
    });
  });

  app.delete("/codeLibrary/delete/:id", function (req, res) {
    console.log(req.params.id);
    db.CodeResource.destroy({
      where: {
        id: req.params.id,
      },
    }).then(function (result) {
      res.json(result);
    });
  });
};