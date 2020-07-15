// Requiring our models for syncing
var db = require("../models");


const { Op } = require("sequelize");

db.sequelize.sync().then(function () {
  // search by id
  db.CodeResource.findAll({
    where: {
      id: 2,
    },
  }).then(function (result) {
    console.table(result);
  });

  // search by keyword "REST"
  db.CodeResource.findAll({
    where: {
      topic: {
        [Op.substring]: "REST",
      },
    },
  }).then(function (result) {
    console.log(result);
  });

  // search by keyword "WEB" or "API"
  db.CodeResource.findAll({
    where: {
      topic: {
        [Op.or]: [{ [Op.substring]: "WEB" }, { [Op.substring]: "API" }],
      },
    },
  }).then(function (result) {
    console.log(result);
  });

  // search by keyword "WEB" and "API"
  var keyWords = ["WEB","API"];
  var searchArr = [];
  for (var i = 0; i < keyWords.length; i++) {
    var obj = {
      [Op.substring]:keyWords[i]
    };
    searchArr.push(obj);
}

  db.CodeResource.findAll({
    where: {
      topic: {
        [Op.and]: searchArr

        // [Op.and]: [{ [Op.substring]: "WEB" }, { [Op.substring]: "API" }],
      },
    },
  }).then(function (result) {
    console.log(result);
  });
});
