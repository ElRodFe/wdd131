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

//Add weather info to weather div element
document.getElementById("temp").textContent = `${temp}°C`;
document.getElementById("conditions").textContent = conditions;
document.getElementById("wind").textContent = `${wind} km/h`;
document.getElementById("windChill").textContent = calculateCelsiusWindChill(temp, wind);