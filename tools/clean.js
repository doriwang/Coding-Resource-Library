// create clean method to facilitate searches
var functionWords = require("./functionWords.js");

function clean(topic) {
    // set up the function words  punctuations
    var specials = ["@", "#", "$","%","^","&","*"];
    var punctuation = ["?", ",", ".", ":", "-","=","+","(",")", "/","[","]","{","}", "!"];

    console.log("clean", topic);
    var wordsArr = topic.split(" ");
    wordsArr  = wordsArr.filter(function(item) {
        return !functionWords.includes(item) && !punctuation.includes(item) && !specials.includes(item) && item != "";
    });
    for (var i = 0; i < wordsArr.length; i++) {
        var letters = wordsArr[i].split("");
        letters = letters.filter(function(letter) {
            return !punctuation.includes(letter);
        });
        wordsArr[i] = letters.join("");
    }
    return wordsArr;
}

module.exports = clean;
