// create search function to facilitate searches
var sentence = "what is a         function ? . ,"

var functionWords= ["IS", "A", "THE", "THAT", "AN", "OF", "FOR"];
var punctuation = ["?", ",", "."];
function removeFunctionWords(sentence) {
    var wordsArr = sentence.toUpperCase().split(" ");
    
    // remove function words
wordsArr  = wordsArr.filter(function(item) {
        return !functionWords.includes(item) && !punctuation.includes(item) && item != "";
    });
    console.log(wordsArr);

}

removeFunctionWords(sentence);
