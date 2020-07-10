var db = require("../models");
const { Op } = require("sequelize");
var clean = require("./clean.js");

// sentence is what user input in the search inbox box. it is sent by req/request
// cb is the callback function
function searchTopics(topic, cb) {
    // if user just click search button without input anything
    // of if user input the word "all", and then click the search button
    // the app will display all records
    console.log("searchTopics", topic);
    if ( topic === "" || topic === "all") {
        db.CodeResource.findAll()
            .then(function (result) {
                cb(result);
            });
    } else {
        // use searchTools to find the keyWords by cleaning function words and punctuations.
        // the app will display the records that includes all the key words. using AND method during query.

        var keyWords = clean(topic);
        console.log("key words: ", keyWords);
        // build search array for Squelize Op.or to use
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
                },
            },
        })
        .then(function (result) {
            cb(result);
        });  
    } // end of else
}

module.exports = searchTopics;