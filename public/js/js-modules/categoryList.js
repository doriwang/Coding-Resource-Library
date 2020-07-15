// set up the category dropdown list
export function categoryList(library, id) {
    var categoryArr = [];
    // get the category from library and push it to categoryArr
    library.forEach((entry) => {
        categoryArr.push(entry.category);
    });
    // console.log("the preliminary category list: ", categoryArr);
    // filter out duplicates from category list
    // copied from https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c
    categoryArr = categoryArr.filter((item, index) => categoryArr.indexOf(item) === index);
    // sort the array alphabetically
    categoryArr.sort();
    // console.log("filtered category list: ", categoryArr);
    // copied from https://www.techiedelight.com/dynamically-create-drop-down-list-javascript/#:~:text=To%20add%20a%20drop%2Ddown,appendChild()%20method%20or%20jQuery's%20.
    $(".selectTags").empty();
    for (const category of categoryArr) {
        if (id == "") {
            $("#index-select-categories").append($(document.createElement('option')).prop({
                value: category,
                text: category
            }));

            $("#addnew-select-categories").append($(document.createElement('option')).prop({
                value: category,
                text: category
            }));

        } else {
            $("#select" + id).append($(document.createElement('option')).prop({
                value: category,
                text: category
            }));
        }

    }
}