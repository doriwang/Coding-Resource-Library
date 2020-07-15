import {
  displayLibrary
} from "./js-modules/display.js"

$(document).ready(function () {
  let category = "";
  let topic = "";
  let url = "";
  let comments = "";

  const createEntry = (entry) => {
    $.ajax({
        method: "POST",
        url: "/codeLibrary",
        data: entry,
      })
      .then(() => {
        // Reset form inputs
        $("#enter-newtopic").val("");
        $("#select-categories").val("");
        $("#enter-newURL").val("");
        $("#enter-newComment").val("");
      })
      .catch((err) => console.log(err));
  };

  // Handles event change for category input
  $("#enter-newtopic").on("change", (event) => {
    // destructure event
    topic = event.target.value;
  });

  // Handles event change for topic input
  $("#addnew-select-categories").on("change", (event) => {
    // destructure event
    category = event.target.value;
  });

  // Handles event change for URL input
  $("#enter-newURL").on("change", (event) => {
    // destructure event
    url = event.target.value;
  });
  // Handles event change for comments input
  $("#enter-newComment").on("change", (event) => {
    // destructure event
    comments = event.target.value;
  });

  // Handles the submit event
  $("form").on("submit", (event) => {
    // prevent default
    event.preventDefault();
    // Stores all data entries into an object
    const entry = {
      topic: topic,
      category: category,
      url: url,
      comments: comments,
    };
    // dori codes here 
    // display the new entry
    displayNewPostEntry(entry)
    // dori codes end here

    createEntry(entry);
  });

  const getLibrary = () => {
    $.ajax({
        method: "GET",
        url: "/codeLibrary",
      })
      .then((library) => {
        // 🍏simon added starts here
        displayLibrary(library);
        // simon added ends here
      })
      .catch((err) => console.log(err));
  };

  // Gets all entries from library and displays to the page
  getLibrary();

  //Grabs the selection choice of user from category dropdown
  $("#index-select-categories").on("change", (event) => {
    category = event.target.value;
  });
  //On submit, the route sends category and returns all entries with specific category
  $("#search-categories").on("click", (event) => {

    // simon added start here
    // reset the msg div and remove the previous message
    $(".msg").empty();
    // simon added end
    $("#index-select-categories").val("");

    const getCategory = (category) => {
      $.ajax({
          method: "GET",
          url: "/category",
          data: {
            category: category
          },
        })
        .then((library) => {

          // 🍏simon added starts here
          displayLibrary(library);
          // simon added ends here

        })
        .catch((err) => console.log(err));
    };
    getCategory(category);
  });
});

// Dori codes here
function displayNewPostEntry(entry) {
  $(".container-addnew").attr("style", "display: none")
  var successMsg = $("<P>").text("Successfully created new resource!").attr("style", "padding-top: 20px")
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

  $("#newPostEntry").append(entryCol);
  $("#successMsg").append(successMsg);
}
// Dori codes end here

// dori codes here
$(document).on("click", ".updateBtn", function (event) {
  var id = $(this).data("id");
  console.log("151 clicked", id)

  $(document).on("click", "#saveChanges", function (event) {
    event.preventDefault();
    test()
    console.log("clicked", id)
    // Handles event change for category input
    function test() {
      var topic = $("#enter-newtopic").val()
      var category = $("#modal-select-categories").val()
      var url = $("#enter-newURL").val()
      var comments = $("#enter-newComment").val()

      $.ajax({
        method: "PUT",
        url: "/codeLibrary/update/" + id,
        data: {
          topic: topic,
          category: category,
          comments: comments,
          url: url,
        },
      }).then(function () {
        location.reload("/codeLibrary")
      });
    }
  })
})
// dori codes end here