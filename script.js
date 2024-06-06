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

//making funtions so the user can click on the email or phone number and automatically have them copied:

//had added onclick in the html file and was having the alert popping twice, so I deleted it and left only this here in js

email.addEventListener(`click`, () => {
  let emailText = document.getElementById("email").textContent.trim();
  navigator.clipboard.writeText(emailText);
  alert(`The email has been copied successfully`);
});

phone.addEventListener(`click`, () => {
  let phoneText = document.getElementById("phone").textContent.trim();
  navigator.clipboard.writeText(phoneText);
  alert(`The phone number has been copied successfully`);
});

//theme black and white part

// no need to call black and white buttons again since we did it in the beginning of the code

//taking the black button: when clicked on it adds the black theme
black.addEventListener("click", () => {
  document.body.classList.remove("white-theme");
  document.body.classList.add("black-theme");
});

//taking the black button: when clicked on it adds the white theme
white.addEventListener("click", () => {
  document.body.classList.remove("black-theme");
  document.body.classList.add("white-theme");
});

//GREETING BOX PART OF THE CODE:

const greetingBox = document.getElementById("greeting-box");
greetingBox.textContent = getGreeting();

//explanation I found on google:
/*new Date(): This creates a new Date object, which represents the current date and time.

getHours(): This is a method of the Date object that returns the current hour (in 24-hour format) based on the system's local time. It returns a number between 0 and 23, where 0 represents midnight and 23 represents 11 PM.*/

function getGreeting() {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 12) {
    return "Good morning";
  } else if (currentHour >= 12 && currentHour < 18) {
    return "Good afternoon";
  } else if (currentHour >= 18 && currentHour < 20) {
    return "Good evening";
  } else {
    return "Good night";
  }
}

//CURRENT DATE DISPLAY PART:

let currentDateElement = document.getElementById("current-date");

function updateCurrentDate() {
  let currentDate = new Date(); //the same we used to write the greeting part, only without the hour.
  let options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  };
  const formattedDate = currentDate.toLocaleDateString("en-IL", options);
  currentDateElement.textContent = formattedDate;
}

updateCurrentDate();

//search bar part of the code:

let searchInput = document.getElementById("search-input");
let searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", () => {
  let searchTerm = searchInput.value.toLowerCase();
  let searchItems = document.getElementsByTagName("li");
});

//to make the search works when I press my Enter key:

searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the form from submitting
    searchInput.blur(); // Remove focus from the input field
    search(); // Trigger the search function
  }
});

function search() {
  const searchTerm = searchInput.value.toLowerCase();
  const searchItems = document.getElementsByTagName("li");

  for (let i = 0; i < searchItems.length; i++) {
    let itemText = searchItems[i].textContent.toLowerCase();
    if (itemText.includes(searchTerm)) {
      searchItems[i].style.display = "block";
    } else {
      searchItems[i].style.display = "none";
    }
  }
}
