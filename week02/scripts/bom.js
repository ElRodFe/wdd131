//Create variables using the existing HTML elements
const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

//Create new HTML elements
const li = document.createElement("li");
const deleteButton = document.createElement("button");

//Change created elements's content
li.textContent = input.value;
deleteButton.textContent = "❌";

//Append created elements to existing ones
li.append(deleteButton);
list.append(li);

