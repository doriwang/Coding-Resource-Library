// Code here handles queries for topics in the database
// In this case, the user submits a sentence, or one or more keywords...
// the application filter out the function words and punctuations, and then pass the filtered keywords  as a parameter
// the server then performs the search to grab that topics from the Database.

// when user hits the search-btn
$("#search-topics").on("click", function () {
  // save the topic they typed into the topics input
  var topic = $("#enter-topics").val().trim().toLowerCase();

  console.log(topic);
  // run an AJAX GET-request for  servers api,
  $.ajax({
    method: "GET",
    url: "/codeLibrary/topics/",
    data: { topic: topic },
  })
    .then((library) => {
      // reset the libraryEntries container
      $("#libraryEntries").empty();

      library.forEach((entry) => {
        var entryCol = $("<div>").addClass(
          "card index-card col-sm-12 col-lg-6"
        );
        var category = $("<p>").text("Category: " + entry.category);
        var topic = $("<p>").text("Topic: " + entry.topic);
        var comments = $("<p>").text("Comments: " + entry.comments);
        var url = $("<a>")
          .attr("href", entry.url)
          .attr("target", "_blank")
          .text("Click Here to View Resource");

        $("#libraryEntries").append(
          entryCol.prepend(category, topic, comments, url)
        );
      });
    })
    .catch((err) => console.log(err));
});
