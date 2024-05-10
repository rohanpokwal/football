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
  initDropdown();
};

function initDropdown() {
  //get the dropdown from the HTML document and assign it to a variable
  let theDropdown = document.querySelector("#footballSelect");

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

    //now add the options
    theDropdown.appendChild(newOption);

    //end of the loop
  }
}
