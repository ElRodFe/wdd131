//Create variables using the existing HTML elements
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

//Event listener for adding the chapter to the list
button.addEventListener("click", function() {
    if (input.value.trim() !== "") {
        //Create new HTML elements
        const li = document.createElement("li");
        const deleteButton = document.createElement("button");

        //Change created elements's content
        li.textContent = input.value;
        deleteButton.textContent = "❌";

        //Append created elements to existing ones
        li.append(deleteButton);
        list.append(li);
        input.value = "";

        //Delete the added chapter
        deleteButton.addEventListener("click", function() {
        list.removeChild(li);
        input.focus();
        })
    }
}) 
