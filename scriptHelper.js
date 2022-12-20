// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
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
  let div = document.getElementById("missionTarget")
   div.innerHTML = 
   <><h2>Mission Destination</h2><ol>
           <li>Name: ${name}</li>
           <li>Diameter: ${diameter}</li>
           <li>Star: ${star}</li>
           <li>Distance from Earth: ${distance}</li>
           <li>Number of Moons: ${moons}</li>
       </ol><img src="${imageUrl}"></img></>
}

function validateInput(testInput) {
   if (testInput === "") {return "Empty"}
   else if (typeof testInput == Number) {return "Is a Number"}
   else {return "Not a Number"}
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus");
}

if (fuelLevel < 10000 && cargoLevel > 10000 ) {
    pilotStatus.innerHTML = 'Pilot ${pilot} ready for launch.';
    copilotStatus.innerHTML = 'Copilot ${copilot} ready for launch.';
    fuelStatus.innerHTML = "Fuel level too low for launch.";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
} else if (fuelLevel < 10000 && cargoLevel <= 10000) {
    pilotStatus.innerHTML = 'Pilot ${pilot} ready for launch.';
    copilotStatus.innerHTML = 'Copilot ${copilot} ready for launch.';
    fuelStatus.innerHTML = "Fuel level too low for launch.";
    cargoStatus.innerHTML = "Cargo mass low enough for launch.";
    launchStatus.innerHTML = "Shuttle not ready for launch.";
} else if (fuelLevel >= 10000 && cargoLevel <= 10000) {
    pilotStatus.innerHTML = 'Pilot ${pilot} ready for launch.';
    copilotStatus.innerHTML = 'Copilot ${copilot} ready for launch.';
    fuelStatus.innerHTML = "Fuel level high enough for launch.";
    cargoStatus.innerHTML = "Cargo mass too heavy for launch.";
    launchStatus.innerHTML = "Shuttle not ready for launch."
} else {
    pilotStatus.innerHTML = 'Pilot ${pilot} ready for launch.';
    copilotStatus.innerHTML = 'Copilot ${copilot} ready for launch.';
    fuelStatus.innerHTML = "Fuel level high enough for launch.";
    cargoStatus.innerHTML = "Cargo mass low enough for launch.";
    launchStatus.innerHTML = "Shuttle ready for launch."
}
    



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
