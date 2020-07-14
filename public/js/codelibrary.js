// 🍏simon added starts here
import {
  displayLibrary,
  displayPostMethod
} from "./js-modules/display.js"
// simon added end

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

        // Navigate to index page with all library entries
        // window.location.href = "/";

        // dori codes here 
        // display the new entry
        displayNewPostEntry(entry)
        // dori codes end here
      })
      .catch((err) => console.log(err));
  };

  // Handles event change for category input
  $("#enter-newtopic").on("change", (event) => {
    // destructure event
    topic = event.target.value;
  });

  // Handles event change for topic input
  $("#select-categories").on("change", (event) => {
    // destructure event
    category = event.target.value;
  });

  // dori codes here
  // Handles event change for topic input
  $("#enter-newcategory").on("change", (event) => {
    // destructure event
    category = event.target.value;
  });
  // dori codes end here

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

    // dori added here
    console.log(entry)
    console.log(category, typeof category)
    // var newCategory = new Option(category);
    // $("#select-categories").append(newCategory)
    var newCategory = "<option>" + category + "</option>"
    // $("#select-categories").html(newCategory)
    $(".test #select-categories").append(newCategory)
    // console.log(newCategory, typeof newCategory, typeof $("#select-categories:first-child"))
    // Creates library entry
    //dori ends here

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
  $("#select-categories").on("change", (event) => {
    category = event.target.value;
  });
  //On submit, the route sends category and returns all entries with specific category
  $("#search-categories").on("click", (event) => {

    // simon added start here
    // reset the msg div and remove the previous message
    $(".msg").empty();
    // simon added end

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