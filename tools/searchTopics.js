var db = require("../models");
const { Op } = require("sequelize");
var clean = require("./clean.js");
var highlight = require("./highlight.js")

// sentence is what user input in the search inbox box. it is sent by req/request
// cb is the callback function
function searchTopics(topic, cb) {
  // if user just click search button without input anything
  // of if user input the word "all", and then click the search button
  // the app will display all records
  console.log("searchTopics", topic);

  // use searchTools to find the keyWords by cleaning function words and punctuations.
  // the app will display the records that includes all the key words. using AND method during query.

  var keyWords = clean(topic);
  console.log("key words: ", keyWords);
  // build search array per Squelize syntax
  var searchArr = [];
  for (var i = 0; i < keyWords.length; i++) {
    var obj = {
      [Op.substring]: keyWords[i],
    };
    searchArr.push(obj);
  }

  // conduct first level query by using AND keywords (search by keyword1 and keyword2 and keyword3 ...)
  db.CodeResource.findAll({
    where: {
      topic: {
        [Op.and]: searchArr,
      },
    },
  }).then(function (result_and) {
    // if there is one and only one keyword, no need to do "query or"
    // if more than one keywords, do "query or" after "query and" (search by keyword1 or keyword2 or keyword3)
    // conduct second level query by using Or keywords
    if (searchArr.length > 1) {
      db.CodeResource.findAll({
        where: {
          topic: {
            [Op.or]: searchArr,
          },
        },
      }).then(function (result_or) {
        // merge the two result arrays together
        // the result or array will join the result and array at the end
        let result = result_and.concat(result_or);
        // call highlight function to handle keywords in topic string
        result = highlight(result, keyWords);
        cb(result);
      });
    } else {
      // if only one keyword, no need to do query or search
      //  call highlight function to handle keywords in topic string
      result = highlight(result_and, keyWords);
      cb(result_and);
    }
  });
}

module.exports = searchTopics;
