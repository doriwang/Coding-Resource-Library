// build a function to display results from database
export function displayLibrary(library) {
  // reset the libraryEntries container
  $("#libraryEntries").empty();

  // for each records, set up the card display
  library.forEach((entry) => {
    var entryCol = $("<div>").addClass("card index-card col-sm-12 col-lg-6");
    var category = $("<p>").text("Category: " + entry.category).attr("id", "category" + entry.id);
    var topic = $(`<p>Topic:  ${ entry.topic}</p>`).attr("id", "topic" + entry.id);
    var comments = $("<p>").text("Comments: " + entry.comments).attr("id", "comments" + entry.id);
    var url = $("<a>")
      .attr("href", entry.url)
      .attr("target", "_blank")
      .text("Click Here to View Resource");

    var btnDiv = $("<div>").addClass("btnDiv")

    var updateBtn = $("<button>").addClass(" btn btn-primary btn-sm updateBtn").text("Update Resource").attr("data-toggle", "modal").attr("data-target", "#myModal").attr("style", "margin-right: 10px")
    var deleteBtn = $("<button>").addClass("btn btn-primary btn-sm deleteBtn").text("Delete Resource")

    // simon added starts here
    updateBtn.attr("data-id", entry.id).attr("type", "submit");
    deleteBtn.attr("data-id", entry.id);
    $("#libraryEntries").attr("data-id", entry.id);

    btnDiv.append(updateBtn, deleteBtn)
    entryCol.prepend(category, topic, comments, url, btnDiv)

    $("#libraryEntries").append(entryCol);
  });
}

// dori added code block starts here
export function displayPostMethod() {
  var yes = $("<a>")
    .addClass("yes")
    .attr("href", "/addnew")
    .text("Yes")
  var no = $("<a>")
    .addClass("no")
    .attr("href", "/")
    .text(" / " + "No");
  var addNewMsg = $("<p>")
    .text("Topic doesn't exist yet. Would you like to create a new one?")
    .attr("style", "margin-top: 20px; margin-bottom: 0px");

  // simon added a new div starts here
  var msgDiv = $("<div>").addClass("msg");
  msgDiv.append(addNewMsg, yes, no);
  $("#newPostMsg").append(msgDiv);
  // simon added end
}
// dori added code block end here