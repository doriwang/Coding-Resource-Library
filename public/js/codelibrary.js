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
        url: "/codeLibrary/post",
        data: entry,
      })
      .then(function () {
        alert("Successfully created new resource!")
        window.location.replace("/")
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
  $(document).on("click", "#add-button", function (event) {
    // event.preventDefault();
    // Stores all data entries into an object
    const entry = {
      topic: topic,
      category: category,
      url: url,
      comments: comments,
    };

    createEntry(entry)
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

$(document).on("click", ".updateBtn", function (event) {
  event.preventDefault();
  var id = $(this).data("id");
  updateModalText(id)

  $(document).on("click", "#saveChanges", function (event) {
    event.preventDefault();
    updateResource(id)
    alert("Successfully updated resource!")
  })
})

function updateModalText(id) {
  $.ajax({
    method: "GET",
    url: "/findOne/" + id,
    data: {
      id: id
    }
  }).then(result => {
    $("#enter-newtopic").val(result.topic)
    $("#modal-select-categories").val(result.category)
    $("#enter-newURL").val(result.url)
    $("#enter-newComment").val(result.comments)
  })
}

function updateResource(id) {
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