"use strict";

//these are our teams
let teams = [
  { code: "DAL", name: "Dallas Cowboys", plays: "Arlington, TX" },
  { code: "DEN", name: "Denver Broncos", plays: "Denver, CO" },
  { code: "HOU", name: "Houston Texans", plays: "Houston, TX" },
  { code: "KAN", name: "Kansas City Chiefs", plays: "Kansas City, MO" },
];

//this is our windows.onload function that runs code once the dom is loaded
window.onload = function () {
  //call the function that loads the teams into the dropdown list we created
  initDropdown();

  //grab our button off the page
  let theForm = document.querySelector("#footballForm");

  //you need to do something when the button is clicked
  //when the button is clicked call the displayFootballTeam
  theForm.addEventListener("submit", displayFootBallTeam);
};

//this function will display the details about our football team
//this function builds the options for the dropdown from our array of objects(teams)
function displayFootBallTeam(event) {
  //keep the form from reloading the page
  event.preventDefault();
  //get the dropdown from the page
  let theDropdown = document.querySelector("#footballSelect");
  let resultsParagraph = document.querySelector("#results");

  //get the index of the selected option in the dropdown
  //this gives me the value
  let selectedIndex = theDropdown.selectedIndex - 1;

  //
  if (theDropdown.value === "") {
    resultsParagraph.innerHTML = "";
  } else {
    //get the team out of the teams array based on
    let selectedTeam = teams[selectedIndex];
    resultsParagraph.innerHTML = `You selected the ${selectedTeam.name} (${selectedTeam.code}) who play in ${selectedTeam.plays}`;
  }
}

function initDropdown() {
  //get the dropdown from the HTML document and assign it to a variable
  let theDropdown = document.querySelector("#footballSelect");

  //create an HTML option element to serve as the defaultoption fir our team select
  let defaultOption = document.createElement("option");

  //set the textContent of the option to be "Select a Team"
  defaultOption.textContent = "Select a Team";

  //set the value of the option to an empty string ("")
  defaultOption.value = "";

  //add this default option to the select
  theDropdown.appendChild(defaultOption);

  //get the total number of teams we have for use in the loop
  let numberOfTeams = teams.length;

  //let start looping over the teams
  for (let i = 0; i < numberOfTeams; i++) {
    //Create an new option for the select
    let newOption = document.createElement("option");

    //now set the textcontent for new option, what the user will see
    newOption.textContent = teams[i].name;

    //now set the value for the option
    newOption.value = teams[i].code;

    //now add the options to the dropdown using the append child
    theDropdown.appendChild(newOption);

    //end of the loop
  }
}
