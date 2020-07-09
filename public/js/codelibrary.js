$(function () {
  let topic = "";
  let url = "";
  let comments = "";

  const getLibrary = () => {
    $.ajax({
      method: "GET",
      url: "/codeLibrary",
    })
      .then((library) => {
        console.log(library);

        library.forEach((entry) => {
          console.log(entry);

          const { topic, url, comments } = entry;

          const list = `
          <ul class="list-group list-group-horizontal-md">
          <li class="list-group-item">${topic}</li>
          <li class="list-group-item">${url}</li>
          <li class="list-group-item">${comments}</li>
        </ul>
                `;
          console.log(list);

          $("#libraryEntries").append(list);
        });
      })
      .catch((err) => console.log(err));
  };

  // Gets all entries from library and displays to the page
  getLibrary();
});
