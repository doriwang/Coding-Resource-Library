// 🍏simon added starts here
import {displayLibrary, displayPostMethod, } from "./js-modules/display.js"
// simon added end

$(document).ready(function() {
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
        window.location.href = "/";
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

    // Creates library entry
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

    // update the resource
    $(".updateBtn").on("submit", function(event) {
      event.preventDefault();
      console.log("i am clicked")
      const id = $(this).data("id");
      console.log(id);
      $("#enter-newtopic").text($("#topic" + id).text());
      $("#select-category").text($("#category" + id).text());
      $("#enter-newURL").attr("placeholder", "Please paste or input new URL");
      $("enter-newComment").text($("#comments"+id).text());
    })
  


});