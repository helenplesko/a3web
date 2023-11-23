/* Responsive Navigation Bar by Lori & Craig */
function myFunctions(y) {
  y.classList.toggle("change");
  let x = document.getElementById("myNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/*Java funciton that adds in the provinces/states tp the box when the user selects USA Canada or Australia */
function showStateProvince() {
  /* Get the selected country */
  var selectedCountry = document.getElementById("country").value;
  /* Get the state/province label and dropdown elements */ 
  var stateLabel = document.getElementById("stateLabel");
  var stateDropdown = document.getElementById("state");

   /*Clear existing options */
   stateDropdown.innerHTML = "";

  /* Populate options based on the selected country */
  if (selectedCountry === "usa") {
    /* If USA is selected, populate the dropdown with 50 states */
    var states = [
  "Alabama", "Alaska", "Arizona", "Arkansas", "California",
  "Colorado", "Connecticut", "Delaware", "Florida", "Georgia",
  "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa",
  "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland",
  "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri",
  "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey",
  "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio",
  "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina",
  "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
  "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
];
    for (var i = 0; i < states.length; i++) {
      var option = document.createElement("option");
      option.value = states[i].toLowerCase();
      option.text = states[i];
      stateDropdown.add(option);
    }
  } 
   else if (selectedCountry === "australia") {
    /* if Australia is selected, the dropdown will show the provinces */
    var ausprov = ["New South Wales", "Queensland", "South Australia", "Tasmania", "Western Australia", "Victoria"];

    for (var k = 0; k < ausprov.length; k++) {
      var optionaus = document.createElement("option");
      optionaus.value = ausprov[k].toLowerCase();
      optionaus.text = ausprov[k];
      stateDropdown.add(optionaus);
    }
	}
  else if (selectedCountry === "canada") {
    /* If Canada is selected, the options box will show the 13 provinces and territories*/
    var provinces = ["Alberta", "British Columbia","Manitoba","New Brunswick","Newfoundland and Labrador","Nova Scotia","Ontario","Prince Edward Island","Quebec","Saskatchewan","Northwest Territories","Nunavut","Yukon"];
    for (var j = 0; j < provinces.length; j++) {
      var optionProvince = document.createElement("option");
      optionProvince.value = provinces[j].toLowerCase();
      optionProvince.text = provinces[j];
      stateDropdown.add(optionProvince);
    }
  }

  /* section to only show the state/province depending on the users input */
  if (selectedCountry === "usa" || selectedCountry === "canada" || selectedCountry === "australia") {
    stateLabel.style.display = "block";
    stateDropdown.style.display = "block";
  } else {
    stateLabel.style.display = "none";
    stateDropdown.style.display = "none";
  }
}
