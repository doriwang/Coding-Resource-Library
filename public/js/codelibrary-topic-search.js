// Code here handles queries for topics in the database
// In this case, the user submits a sentence, or one or more keywords...
// the application filter out the function words and punctuations, and then pass the filtered keywords  as a parameter
// the server then performs the search to grab that topics from the Database.

// var displayLibrary = require("./displayLibrary.js");
import { displayLibrary, displayPostMethod } from "./js-modules/display.js";

$(function () {
  // when user hits the search-btn
  // handle search by topics
  $("#search-topics").on("click", function () {
    // dori starts
    // reset div result
    $("#newPostMsg").empty();
    // dori ends here

    // save the topic they typed into the topics input
    var topic = $("#enter-topics").val().trim().toLowerCase();

    console.log(topic);
    // run an AJAX GET-request for  servers api,
    $.ajax({
      method: "GET",
      url: "/codeLibrary/topics/",
      data: {
        topic: topic,
      },
    })
      .then((library) => {
        //Jon added, allows entry to be accessed inside of promise
        var userInput = topic;

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

  // update the resource
  $(document).on("click", ".updateBtn", function (event) {
    event.preventDefault();
    console.log("i am clicked");
    const id = $(this).data("id");
    console.log(id);

    // display the current content to the modal
    $("#enter-newtopic").val($("#topic" + id).text());
    $("#select-category").val($("#category" + id).text());
    $("#enter-newURL").val("Please paste or input new URL");
    $("#enter-newComment").val($("#comments" + id).text());

    // click the "save changes" button
    $("#update-button ").on("click", function (event) {
      let category = $("#select-category").val();
      let topic = $("#enter-newtopic").val();
      let comment = $("enter-newComment").val();
      let url = $("#enter-newURL").val();

      if (url === "") {
        const entry = {
          topic: topic,
          category: category,
          comments: comments,
        };
      } else {
        const entry = {
          topic: topic,
          category: category,
          url: url,
          comments: comments,
        };

        $.ajax({
          method: "PUT",
          url: "/codeLibrary/update/" + id,
          data: entry,
        }).then(function () {
          location.reload("/codeLibrary");
        });
      }
    });
  });

  // delete the resource
  $(".deleteBtn").on("submit", function (event) {
    // event.preventDefault();
    const id = $(this).data("id");

    $.ajax({
      method: "DELETE",
      URL: "/codeLibrary/delete/" + id,
    }).then(function () {
      location.reload("/codeLibrary");
    });
  });
});
