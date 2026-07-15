//Get current Year and Last modified date for footer
const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

////  Display Weather Data  ////
const temp = 27
const conditions = "Sun"
const wind = 8

function calculateCelsiusWindChill(t, w) {
    // Only applies if temperature is <= 10°C and wind is > 4.8 km/h
    if (t <= 10 && w > 4.8) {
        const chill = 13.12 + 0.6215 * t - 11.37 * Math.pow(w, 0.16) + 0.3965 * t * Math.pow(w, 0.16);
        return chill.toFixed(2);
    }
    return "N/A";
}

//Get the weather div element
const weatherCard = document.querySelector(".weather");

//create and populate the paragraphs with info
const pTemp = document.createElement("p");
pTemp.innerHTML = `<strong>Temperature:</strong> ${temp}°C`

const pCoonditions = document.createElement("p");
pCoonditions.innerHTML = `<strong>Conidtions:</strong> ${conditions}`

const pWind = document.createElement("p");
pWind.innerHTML = `<strong>Wind:</strong> ${wind}Km/h`

const pWchill = document.createElement("p");
pWchill.innerHTML = `<strong>WindChill:</strong> ${calculateCelsiusWindChill(temp, wind)}°C`

//Append created paragraphs to weather div element
weatherCard.appendChild(pTemp);
weatherCard.appendChild(pCoonditions);
weatherCard.appendChild(pWind);
weatherCard.appendChild(pWchill);