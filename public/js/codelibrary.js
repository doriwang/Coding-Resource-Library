$(function () {
  const getLibrary = () => {
    $.ajax({
        method: "GET",
        url: "/codeLibrary",
      })
      .then(library => {
        library.forEach(entry => {
          var entryCol = $("<div>").addClass("card index-card col-sm-12 col-lg-6");
          var category = $("<p>").text("Category: " + entry.category);
          var topic = $("<p>").text("Topic: " + entry.topic)
          var comments = $("<p>").text("Comments: " + entry.comments)
          var url = $("<a>").attr("href", entry.url).attr("target", "_blank").text("Click Here to View Resource")

          $("#libraryEntries").append(entryCol.prepend(category, topic, comments, url))
        });
      })
      .catch((err) => console.log(err));
  };

  // Gets all entries from library and displays to the page
  getLibrary();
});