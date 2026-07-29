// Get Year and Last Modified
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

//Populate the product options
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const list = document.querySelector("#products");

products.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.name;

    const capitalizedName = product.name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    
    option.textContent = capitalizedName;

    list.appendChild(option);
})

//Save completed reviews count into localStorage