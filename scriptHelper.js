// Write your helper functions here!
require ('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
  let div = document.getElementById("missionTarget");
   div.innerHTML = 
   `<h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter}</li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance}</li>
        <li>Number of Moons: ${moons}</li>
    </ol>
    <img src="${image}"> `
}

function validateInput(testInput) {
   if (testInput === "") {return "Empty";}
   else if (isNaN(testInput)) {return "Not a Number";}
   else {return "Is a Number";}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let h2 = document.getElementById("launchStatus");

if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty")  {list.style.visibility = "hidden"; alert("All fields are required.");} 
if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number" || validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number")  {alert("Valid input required.");}

 if (fuelLevel < 10000 && cargoLevel > 10000 ) {
    list.style.visibility = "visible";
    h2.innerHTML = "Shuttle not ready for launch.";
    h2.style.color = "red";
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} ready for launch.`;
    fuelStatus.innerHTML = "Fuel level too low for launch.";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
    
} else if (fuelLevel < 10000 && cargoLevel <= 10000) {
    list.style.visibility = "visible";
    h2.innerHTML = "Shuttle not ready for launch.";
    h2.style.color = "red";
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} ready for launch.`;
    fuelStatus.innerHTML = "Fuel level too low for launch.";
    cargoStatus.innerHTML = "Cargo mass low enough for launch.";
    
} else if (fuelLevel >= 10000 && cargoLevel > 10000) {
    list.style.visibility = "visible";
    h2.innerHTML = "Shuttle not ready for launch.";
    h2.style.color = "red";
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} ready for launch.`;
    fuelStatus.innerHTML = "Fuel level high enough for launch.";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";

} else {
    list.style.visibility = "visible";
    h2.innerHTML = "Shuttle ready for launch!";
    h2.style.color= "green";
    pilotStatus.innerHTML = `Pilot ${pilot} ready for launch.`;
    copilotStatus.innerHTML = `Co-pilot ${copilot} ready for launch.`;
    fuelStatus.innerHTML = "Fuel level high enough for launch.";
    cargoStatus.innerHTML = "Cargo mass low enough for launch.";
}
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });
    return planetsReturned;
}

function pickPlanet(planets) {
    return planets [(Math.floor((Math.random()* planets.length)))]
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
