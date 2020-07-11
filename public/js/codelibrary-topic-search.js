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
      data: {
        topic: topic
      },
    })
    .then((library) => {
      // dori added code block starts here
      // if no results are pulled back, displayPostMethod()
      if (library.length === 0) {
        displayPostMethod();
      }
      // dori added code block end here

      // reset the libraryEntries container
      $("#libraryEntries").empty();

      library.forEach((entry) => {
        console.log(entry.id)
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

        var btnDiv = $("<div>").addClass("btnDiv")

        var updateBtn = $("<button>").addClass(" btn btn-primary btn-sm updateBtn").text("Update Resource").attr("data-toggle", "modal").attr("data-target", "#myModal").attr("style", "margin-right: 10px")
        var deleteBtn = $("<button>").addClass("btn btn-primary btn-sm deleteBtn").text("Delete Resource")

        btnDiv.append(updateBtn, deleteBtn)
        entryCol.prepend(category, topic, comments, url, btnDiv)

        $("#libraryEntries").append(entryCol);
      });
    })
    .catch((err) => console.log(err));
});

// dori added code block starts here
function displayPostMethod() {
  var yes = $("<a>").addClass("yes").attr("href", "/addnew").text("Yes").attr("style", "margin-left: -15px");
  var no = $("<a>").addClass("no").attr("href", "/").text(" / " + "No");
  var addNewMsg = $("<p>").text("Topic doesn't exist yet. Would you like to create a new one?").attr("style", "margin-left: -15px; margin-top: 20px; margin-bottom: 0px");
  $(".container-main").append(addNewMsg, yes, no)
}
// dori added code block end here