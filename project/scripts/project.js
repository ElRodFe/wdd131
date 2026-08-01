//Get year for copyright text
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

//Hamburguer menu functionality
const hamButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

hamButton.addEventListener("click", function() {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        hamButton.textContent = "×"
    } else {
        hamButton.textContent = "☰"
    }
});

//Display components info into the HTML div
const components = [{
    name: "compressor",
    info: "The Compressor serves as the heart of your vehicle's air conditioning system by pressurizing and circulating refrigerant through a continuous cooling loop. Driven by the engine's serpentine belt, it draws in warm, low-pressure refrigerant gas returning from the cabin, compresses it into a high-pressure, high-temperature gas, and pushes it forward to the condenser near the radiator, where the trapped heat is dissipated into the outside air so cooled air can flow back into your car.",
    imgurl: "images/compressor.webp",
},
{
    name: "condenser",
    info: "The Condenser acts as the heat exchanger for your vehicle's air conditioning system, responsible for cooling down and liquefying the refrigerant. Located at the front of your vehicle right in front of the radiator, it receives the hot, high-pressure refrigerant gas pushed out by the compressor and uses the incoming airflow from driving—along with the radiator cooling fan—to strip away the heat, converting the gas back into a high-pressure liquid before it travels toward the cabin to cool your air.",
    imgurl: "images/condenser.webp",
},
{
    name: "drier filter",
    info: "The Receiver-drier (or filter-drier) acts as a temporary storage and purification unit for your vehicle's air conditioning system. Positioned along the refrigerant loop, it receives liquid refrigerant from the condenser, uses an internal desiccant to absorb any trapped moisture that could freeze or cause internal corrosion, and filters out debris and contaminants before sending clean liquid refrigerant onward to produce cold air for your cabin.",
    imgurl: "images/dryer-filter.webp",
},
{
    name: "expansion valve",
    info: "The Expansion Valve acts as the flow regulator and pressure drop mechanism for your vehicle's air conditioning system. Positioned right before the evaporator, it depressurizes the high-pressure liquid refrigerant coming from the receiver-drier, expanding it rapidly into a cold, low-pressure mist; this sudden drop in pressure dramatically lowers the refrigerant's temperature just before it enters the evaporator core, where it absorbs heat from your cabin air.",
    imgurl: "images/expansion-valve.webp",
},
{
    name: "evaporator",
    info: "The Evaporator acts as the heat absorber and cooling core for your vehicle's air conditioning system. Located deep inside your dashboard, it receives the cold, low-pressure refrigerant mist from the expansion valve, allowing the cabin fan to blow warm interior air over its chilling fins; as the refrigerant absorbs the heat and humidity from that air, it evaporates back into a low-pressure gas, sending crisp, cold air through your vents while routing the warm gas back to the compressor to restart the entire cycle.",
    imgurl: "images/evaporator.webp",
}];

const componentsDiv = document.querySelector(".componentsDiv");

components.forEach((component) => {
    let componentCard = document.createElement("section");

    let capitalizedName = component.name
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
    let name = document.createElement("h3");
    name.textContent = capitalizedName;

    let info = document.createElement("p");
    info.textContent = component.info;

    let image = Object.assign(document.createElement("img"), {
      src: component.imgurl,
      alt: `${capitalizedName} of vehicle A/C system`,
      loading: "lazy",
    });

    componentCard.appendChild(name);
    componentCard.appendChild(info);
    componentCard.appendChild(image);

    componentsDiv.appendChild(componentCard);
})