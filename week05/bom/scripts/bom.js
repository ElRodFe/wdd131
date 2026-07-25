//Create variables using the existing HTML elements
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

let chaptersArray = getChapterList() || [];

//Event listener for adding the chapter to the list
button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        displayList(input.value);

        chaptersArray.push(input.value);
        setChapterList(chaptersArray);

        input.value = "";
        input.focus();
    }
}) 

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

function displayList(item) {
    //Create new HTML elements
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");

    //Change created elements's content
    li.textContent = item;
    deleteButton.textContent = "❌";

    //Append created elements to existing ones
    li.append(deleteButton);
    list.append(li);

    //Delete the added chapter
    deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        deleteChapter(li.textContent);
        input.focus();
    })
}

function setChapterList(item) {
    localStorage.setItem("myFavBOMList", JSON.stringify(item));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length -1);
    chaptersArray = chaptersArray.filter( (item) => item !== chapter)

    setChapterList(chaptersArray);
}