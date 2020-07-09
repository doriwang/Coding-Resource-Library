// create search function to facilitate searches
var sentence = "what is a         function ? . ,"

var functionWords= ["IS", "A", "THE", "THAT", "AN", "OF", "FOR"];
var punctuation = ["?", ",", "."];
function removeFunctionWords(sentence) {
    var wordsArr = sentence.toUpperCase().split(" ");
    console.log(wordsArr);
    console.log(functionWords);
    // // remove extra space
    // wordsArr = wordsArr.filter(function(item) {
    //     return item != " ";
    // })

    // remove empty element
    // wordsArr = wordsArr.filter(function(item) {
    //     return item != "";
    // })


    // remove function words
wordsArr  = wordsArr.filter(function(item) {
        return !functionWords.includes(item) && !punctuation.includes(item) && item != "";
    });
    console.log(wordsArr);

}

removeFunctionWords(sentence);
