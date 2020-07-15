// set up a function to highlight the key works in topic
// the result parameter is the query result array. 
// the keywords parameter is the keywords array.
function highlight(result, keywords) {
    let highlightTopic;
    for(let i = 0; i < result.length; i++) {
        var topicWordArr = result[i].dataValues.topic.split(" ");
        for(let j = 0; j < topicWordArr.length; j++) {
            keywords.forEach(function(keyWord) {
                let highlight = '<span class="highlight">' + keyWord.toUpperCase() + '</span>';
                // use RegExp object to perform case insensitive replace
                let regEx = new RegExp(keyWord, "ig");
                topicWordArr[j] = topicWordArr[j].replace(regEx, highlight );
            });
        }
        result[i].dataValues.topic = topicWordArr.join(" ");
    }
    return result;
}

module.exports = highlight;