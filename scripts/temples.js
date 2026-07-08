const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", function() {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        hamButton.textContent = "x"
    } else {
        hamButton.textContent = "☰"
    }
});