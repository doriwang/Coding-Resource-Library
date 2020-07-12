
$(".updatebtn").on("click", function(event) {
    const id = $(this).data("id");
    $("#enter-newtopic").text($("#topic" + id).text());
    $("#select-category").text($("#category" + id).text());
    $("#enter-newURL").attr("placeholder", "Please paste or input new URL");
    $("enter-newComment").text($("#comments"+id).text());
})


// const setUpdateModal = (entry) => {
// 
// 
//     
//     
//     
//     $("#enter-newtopic")
// }