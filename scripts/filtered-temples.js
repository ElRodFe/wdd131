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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Montevideo Uruguay",
    location: "Montevideo, Uruguay",
    dedicated: "2001, March, 18",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/montevideo-uruguay-temple/montevideo-uruguay-temple-18474-main.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 28",
    area: 53997,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-57277.jpg"
  },
  {
    templeName: "Bahia Blanca Argentina",
    location: "Bahía Blanca, Argentina",
    dedicated: "2025, November, 25",
    area: 23400,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
  },
];

const templesdiv = document.querySelector("#temples")

//Create a card for every temple in the array and append the card to the div element
function displayTemples(temples) {

  templesdiv.innerHTML = "";

  temples.forEach( temple => {
    let templeCard = document.createElement("section");

    let name = document.createElement("h2");
    name.textContent = temple.templeName;

    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    let dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    let size = document.createElement("p");
    size.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

    let image = Object.assign(document.createElement("img"), {
      src: temple.imageUrl,
      alt: `Temple of ${temple.templeName}`,
      loading: "lazy",
    });

    // Append elements to the card
    templeCard.appendChild(name);
    templeCard.appendChild(location);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(size);
    templeCard.appendChild(image);

    templesdiv.appendChild(templeCard);
  })
}

//Also display all the temples when clicking "Home" button
document.querySelector("#homeButton").addEventListener("click", () => {
  displayTemples(temples);
})

//Display only older temples when clicking "Old" button
document.querySelector("#oldButton").addEventListener("click", () => {
  templesdiv.innerHTML = "";

  let olderTemples = temples.filter(temple => {
    const textYear = temple.dedicated.split(",")[0];
    const year = parseInt(textYear);

    return year < 1900;
  })

  displayTemples(olderTemples);

})

//Display only newer temples when clicking "New" button
document.querySelector("#newButton").addEventListener("click", () => {
  templesdiv.innerHTML = "";

  let newTemples = temples.filter(temple => {
    const textYear = temple.dedicated.split(",")[0];
    const year = parseInt(textYear);

    return year > 2000;
  })

  displayTemples(newTemples);

})

//Display Larger temples when clicking "Large" button
document.querySelector("#largeButton").addEventListener("click", () => {
  templesdiv.innerHTML = "";

  let largeTemples = temples.filter(temple => {

    return temple.area > 90000
  })

  displayTemples(largeTemples);

})

//Display Smaller temples when clicking "Small" button
document.querySelector("#smallButton").addEventListener("click", () => {
  templesdiv.innerHTML = "";

  let largeTemples = temples.filter(temple => {

    return temple.area < 10000
  })

  displayTemples(largeTemples);

})

displayTemples(temples);