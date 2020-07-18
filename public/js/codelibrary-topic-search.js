// Code here handles queries for topics in the database
// In this case, the user submits a sentence, or one or more keywords...
// the application filter out the function words and punctuations, and then pass the filtered keywords  as a parameter
// the server then performs the search to grab that topics from the Database.

// var displayLibrary = require("./displayLibrary.js");
import {
  displayLibrary,
  displayPostMethod
} from "./js-modules/display.js";

$(function () {
  // when user hits the search-btn
  // handle search by topics
  $("#search-topics").on("click", function () {

    // dori starts
    // reset div result
    $("#newPostMsg").empty();
    // $("#index-select-categories").empty();
    // dori ends here

    // save the topic they typed into the topics input
    var topic = $("#enter-topics").val().trim().toLowerCase();
    $("#enter-topics").val("");

    // run an AJAX GET-request for  servers api,
    $.ajax({
        method: "GET",
        url: "/codeLibrary/topics/",
        data: {
          topic: topic,
        },
      })
      .then((library) => {
        // dori added code block starts here
        // if no results are pulled back, displayPostMethod()
        if (library.length === 0) {
          displayPostMethod();
        }
        // dori added code block end here
        displayLibrary(library);
      })
      .catch((err) => console.log(err));
  });

  // delete the resource
  $(document).on("click", ".deleteBtn", function (event) {
    // event.preventDefault();
    const id = $(this).data("id");
    alert("Successfully deleted resource!")

    $.ajax({
      method: "DELETE",
      url: "/codeLibrary/delete/" + id,
    }).then(function () {
      location.reload("/codeLibrary");
    });
  });
});