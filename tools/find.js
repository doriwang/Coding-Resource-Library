// Import Models
var db = require("../models");

//Get all existing entries from database
db.CodeResource.findAll().then(function (result) {
    res.json(result);
    console.log(result);
});
