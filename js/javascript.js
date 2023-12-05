///////////////////////
// Owner: 	Lori Lowy & Craig Jurkiewicz
// Date:		November 23, 2023
// Section:	RESPONSIVE NAV BAR
// Inspired By: 
///////////////////////

// Function to make navigation bar responsive
function responsiveNav(y) {
  y.classList.toggle("change");
  let x = document.getElementById("myNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// Lori & Craig Responsive NavBar End 


///////////////////////
// Owner: 	Lilit Markarian & Ryan Jeffery
// Date:		November 23, 2023
// Section:	DARK MODE
// Inspired By: 
///////////////////////

// Function to switch web page to dark mode
function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Lilit & Ryan Dark Mode End