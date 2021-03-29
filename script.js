// Write your JavaScript code here!

window.addEventListener("load", function() {      
   let form = document.getElementById("launchForm").addEventListener("submit", function(event)
    { 
       event.preventDefault();
         let pilotName = document.querySelector("input[name=pilotName]");
         let copilotName = document.querySelector("input[name=copilotName]")
         let fuelLevel = document.querySelector("input[name=fuelLevel]")
         let cargoMass = document.querySelector("input[name=cargoMass]")
         if (!pilotName.value || !copilotName.value || !fuelLevel.value || !cargoMass.value) {
            alert("All fields required")
         }
         if (isNaN(cargoMass.value) || isNaN(fuelLevel.value)) {
            alert("You must enter a number")
         }
         if (fuelLevel.value < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible" 
            document.getElementById("launchStatus").style.color = "red"
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low to complete journey."
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            return
         } 
         else if (cargoMass.value > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible" 
            document.getElementById("launchStatus").style.color = "red"
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy. Shuttle cannot take off."
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch"
            return
         }
         else {
            document.getElementById("launchStatus").style.color = "green"
            document.getElementById("faultyItems").style.visibility = "visible"
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch."
            document.getElementById("pilotStatus").innerHTML = pilotName.value + " Ready"
            document.getElementById("copilotStatus").innerHTML = copilotName.value + " Ready"
         }
});
    });

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
   response.json().then(function(json) {
         const destination = document.getElementById("missionTarget");
         destination.innerHTML = ` 
         <h2> Mission Destination </h2>
         <ol>
            <li>Name: ${json[0].name} </li>
            <li>Diameter: ${json[0].diameter} </li>
            <li>Star: ${json[0].star} </li>
            <li>Distance from Earth: ${json[0].distance} </li>
            <li>Number of Moons: ${json[0].moons} </li>
      </ol>
      <img src="${json[0].image}"> `;
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
