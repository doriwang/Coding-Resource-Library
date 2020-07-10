// Code here handles queries for topics in the database
// In this case, the user submits a sentence, or one or more keywords... 
// the application filter out the function words and punctuations, and then pass the filtered keywords  as a parameter
// the server then performs the search to grab that topics from the Database.

// when user hits the search-btn
$("#search-topics").on("click", function() {
    // save the topic they typed into the topics input
    var topic = $("#enter-topics")
        .val()
        .trim()
        .toLowerCase();

    console.log(topic);
    // run an AJAX GET-request for  servers api,
    $.ajax({
        method: "GET",
        url: "/codeLibrary/topics/", 
        data: {topic: topic}
    })
    .then((library) => {
        // reset the libraryEntries container
        $("#libraryEntries").empty();

        library.forEach((entry) => {
            const { category, topic, url, comments } = entry;

            const list = `
            <ul class="list-group list-group-horizontal-md">
            <li class="list-group-item">${category}</li>
            <li class="list-group-item">${topic}</li>
            <li class="list-group-item">${url}</li>
            <li class="list-group-item">${comments}</li>
            </ul>
            `;

            $("#libraryEntries").append(list);
        });
    })
    .catch((err) => console.log(err));
});