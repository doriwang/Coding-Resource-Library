$(function () {
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
        $("#category").val("");
        $("#topic").val("");
        $("#url").val("");
        $("#comments").val("");

        // Navigate to index page with all library entries
        window.location.href = "/";
      })
      .catch((err) => console.log(err));
  };

  // Handles event change for category input
  $("#category").on("change", (event) => {
    // destructure event
    category = event.target.value;
  });

  // Handles event change for topic input
  $("#topic").on("change", (event) => {
    // destructure event
    topic = event.target.value;
  });
  // Handles event change for URL input
  $("#url").on("change", (event) => {
    // destructure event
    url = event.target.value;
  });
  // Handles event change for comments input
  $("#comments").on("change", (event) => {
    // destructure event
    comments = event.target.value;
  });

  // Handles the submit event
  $("form").on("submit", (event) => {
    // prevent default
    event.preventDefault();

    // Stores all data entries into an object
    const entry = {
      category: category,
      topic: topic,
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
  };

  // Gets all entries from library and displays to the page
  getLibrary();

  //Grabs the selection choice of user from category dropdown
  $("#select-categories").on("change", (event) => {
    category = event.target.value;
  });
  //On submit, the route sends category and returns all entries with specific category
  $("#search-categories").on("click", (event) => {
    const getCategory = (category) => {
      $.ajax({
        method: "GET",
        url: "/category",
        data: { category: category },
      })
        .then((library) => {
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
    };
    getCategory(category);
  });
});
