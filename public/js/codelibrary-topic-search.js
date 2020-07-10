// Code here handles queries for topics in the database
// In this case, the user submits a sentence, or one or more keywords... 
// the application filter out the function words and punctuations, and then pass the filtered keywords  as a URL parameter
// the server then performs the search to grab that topics from the Database.

// when user hits the search-btn
$("#search-topics").on("click", function() {
    // save the topic they typed into the topics input
    var searchedWords = $("#enter-topics")
        .val()
        .trim()
        .toLowerCase();
    
    // run an AJAX GET-request for our servers api,
    // including the user's character in the url
    $.get("/codeLibrary/topics/", searchedWords, function(data) {
        console.log(data);
    });
    
});