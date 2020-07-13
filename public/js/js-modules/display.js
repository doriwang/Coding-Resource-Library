// build a function to display results from database
export function displayLibrary(library) {
  // reset the libraryEntries container
  $("#libraryEntries").empty();

  // for each records, set up the card display
  library.forEach((entry) => {
    //splits array depending on where user input matches topic word
    var userInput = $("#enter-topics").val().trim().toLowerCase();
    var lower1 = userInput.toLowerCase();
    var lower2 = entry.topic.toLowerCase();
    var splitString = lower2.split(lower1);
    console.log(splitString);

    var afterHighlight = $("<span>").text(splitString[1]);

    var highlight = $("<span>")
      .text(lower1.toUpperCase())
      .attr("style", "background-color:yellow");

    //Jon code ends here
    // console.log(entry.id)
    var entryCol = $("<div>").addClass("card index-card col-sm-12 col-lg-6");
    var category = $("<p>")
      .text("Category: " + entry.category)
      .attr("id", "category" + entry.id);
    var topic = $("<p>")
      .text("Topic: " + splitString[0])
      .attr("id", "topic" + entry.id);
    //Jon added two appended span tags
    topic.append(highlight, afterHighlight);

    var comments = $("<p>")
      .text("Comments: " + entry.comments)
      .attr("id", "comments" + entry.id);
    var url = $("<a>")
      .attr("href", entry.url)
      .attr("target", "_blank")
      .text("Click Here to View Resource");

    var btnDiv = $("<div>").addClass("btnDiv");

    // var updateBtn = $("<button>").addClass(" btn btn-primary btn-sm updateBtn").text("Update Resource").attr("style", "margin-right: 10px");

    var updateBtn = $("<button>")
      .addClass(" btn btn-primary btn-sm updateBtn")
      .text("Update Resource")
      .attr("data-toggle", "modal")
      .attr("data-target", "#myModal")
      .attr("style", "margin-right: 10px");
    var deleteBtn = $("<button>")
      .addClass("btn btn-primary btn-sm deleteBtn")
      .text("Delete Resource");

    // simon added starts here
    updateBtn.attr("data-id", entry.id).attr("type", "submit");
    deleteBtn.attr("data-id", entry.id);
    $("#libraryEntries").attr("data-id", entry.id);

    updateBtn.attr("onClick", function (event) {
      const id = $(this).data("id");
      console.log(id);
    });
    // simon added ends

    btnDiv.append(updateBtn, deleteBtn);
    entryCol.prepend(category, topic, comments, url, btnDiv);

    $("#libraryEntries").append(entryCol);
  });
}

// dori added code block starts here
export function displayPostMethod() {
  var yes = $("<a>")
    .addClass("yes")
    .attr("href", "/addnew")
    .text("Yes")
    .attr("style", "margin-left: -15px");
  var no = $("<a>")
    .addClass("no")
    .attr("href", "/")
    .text(" / " + "No");
  var addNewMsg = $("<p>")
    .text("Topic doesn't exist yet. Would you like to create a new one?")
    .attr("style", "margin-left: -15px; margin-top: 20px; margin-bottom: 0px");

  // simon added a new div starts here
  var msgDiv = $("<div>").addClass("msg");
  msgDiv.append(addNewMsg, yes, no);
  $(".container-main").append(msgDiv);
  // simon added end

  // $(".container-main").append(addNewMsg, yes, no)
}
// dori added code block end here
