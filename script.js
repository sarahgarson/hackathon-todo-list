//SIDEBAR NAV PART OF THE CODE:

//side bar 3 lines (created with span on out html file), if clicked on, the sidebar appears:

let sidebar = document.querySelector(".sidebar");
let sidebarIcon = document.querySelector(".sidebar-icon");

//This method toggles the presence of the "open" class on the sidebar element.
sidebarIcon.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

//Here we are creating an event where if the user clicks anywhere on the sidebar or in the sidebar icon it will stay open...
document.addEventListener("click", (event) => {
  const isClickInsideSidebar = sidebar.contains(event.target);
  const isClickOnIcon = sidebarIcon.contains(event.target);

  //and here if the user clicks anywhere else in the page the side bar will close, together with any dropdown buttons that were closed
  if (!isClickInsideSidebar && !isClickOnIcon) {
    sidebar.classList.remove("open");
    email.style.display = "none";
    phone.style.display = "none";
    black.style.display = "none";
    white.style.display = "none";
    isDropdownVisible = false;
  }
});

// calling on the buttons so we can arrange them to dropdown

let email = document.getElementById("email");
let phone = document.getElementById("phone");
let helpButton = document.getElementById(`help`);
let themeButton = document.getElementById(`theme`);
let black = document.getElementById(`black`);
let white = document.getElementById(`white`);
let isDropdownVisible = false;

helpButton.addEventListener(`click`, dropdownButtons1);
themeButton.addEventListener(`click`, dropdownButtons2);

/* console.log(helpButton);
  console.log(phone);
  console.log(email);*/ //used to check if there were no errors in the making

//when help/theme buttons are clicked on, email and phone or black and white number drop, and when its clicked again for a second time the button are hidden again.

//for the help buttons:
function dropdownButtons1() {
  if (!isDropdownVisible) {
    email.style.display = "block";
    phone.style.display = "block";

    isDropdownVisible = true;
  } else {
    email.style.display = "none";
    phone.style.display = "none";

    isDropdownVisible = false;
  }
}

//for the theme buttons:

function dropdownButtons2() {
  if (!isDropdownVisible) {
    black.style.display = `block`;
    white.style.display = `block`;
    isDropdownVisible = true;
  } else {
    black.style.display = "none";
    white.style.display = "none";
    isDropdownVisible = false;
  }
}

//In the next part, if the help button is clicked on the them button automatically closes so the dropdown buttons dont appear one on top of the other:

// Function to close the theme button dropdowns
function closeThemeButton() {
  black.style.display = "none";
  white.style.display = "none";
}
// Event listener to the Help button, if its clicked on the Theme button will be closed
helpButton.addEventListener("click", function () {
  closeThemeButton();
});

// Function to close the help button dropdowns
function closeHelpButton() {
  email.style.display = "none";
  phone.style.display = "none";
}

// Event listener to the Theme button, if its clicked on the Help button will be closed
themeButton.addEventListener("click", function () {
  closeHelpButton();
});
