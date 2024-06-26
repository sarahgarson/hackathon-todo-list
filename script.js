// 1. SIDEBAR NAV PART OF THE CODE:

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

//making functions so the user can click on the email or phone number and automatically have them copied:

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

//---------------------------------------------------------------

// 2. GREETING BOX PART OF THE CODE:

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

//---------------------------------------------------------------

// 3. CURRENT DATE DISPLAY PART:

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

//---------------------------------------------------------------

//4. SEARCH BAR PART:

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
  const searchItems = document.querySelectorAll(".task-name");

  if (searchInput === "") {
    let allTasks = document.querySelectorAll(".task-container");
    allTasks.forEach((task) => {
      task.style.display = "block";
    });
  }

  for (let i = 0; i < searchItems.length; i++) {
    let itemText = searchItems[i].textContent.toLowerCase();
    let isVisible =
      searchItems[i].closest(".task-container").style.display !== "none";

    if (itemText.includes(searchTerm)) {
      if (!isVisible) {
        searchItems[i].closest(".task-container").style.display = "block";
      }
    } else {
      if (isVisible) {
        searchItems[i].closest(".task-container").style.display = "none";
      }
    }
  }
  // Add functionality to display all tasks when the search input is erased
}

//---------------------------------------------------------------

//5. ADD TASKS BUTTON AND TASKS BOXES

let addTaskButton = document.getElementById("add-task-button");
let submitTaskButton = document.getElementById("submit-task-button");
let taskForm = document.getElementById("task-form");
let addedTasksContainer = document.getElementById("added-tasks-container");

// Load tasks from local storage when the page loads
document.addEventListener("DOMContentLoaded", loadTasksFromLocalStorage);

//when pressed once the form appears, and when pressed again on the button the form disappears. And if a task was added the form also automatically disappears
addTaskButton.addEventListener("click", () => {
  taskForm.classList.toggle("open");
  taskForm.classList.toggle("hidden");
});

// Add a new task when the submit task button is clicked
submitTaskButton.addEventListener("click", (e) => {
  e.preventDefault(); // This prevents the default form submission, allowing us to handle the form data with JavaScript.

  //calling our tasks name,hour and date variables:
  const taskName = document.getElementById("task-name").value;
  const taskTime = document.getElementById("task-hour").value;
  const taskDate = document.getElementById("task-date").value;

  //making sure that all required fields are filled.
  if (
    taskName.trim() !== "" &&
    taskTime.trim() !== "" &&
    taskDate.trim() !== ""
  ) {
    // This creates an object to represent the task,taking all the details from it and making it in one if all the fields were filled
    const task = {
      name: taskName,
      time: taskTime,
      date: taskDate,
    };

    //THE TWO BELOW TOGETHER MAKES IT AVAILABLE FOR US TO REFRESH THE PAGE AND NOT LOSE ALL OUR TASKS THAT WERE ADDED BY STORING THEM IN OUR LOCAL STORAGE AND TO THE USER INTERFACE (UI)
    // This function call adds the task to the user interface.
    addTaskToUI(task);
    // Save the task to local storage
    saveTaskToLocalStorage(task);

    // Clear the input fields so whenever the user clicks on the add tasks button (the plus button) all the field will be clear for a new task to be added ;)
    document.getElementById("task-name").value = "";
    document.getElementById("task-hour").value = "";
    document.getElementById("task-date").value = "";

    // Hide the form
    taskForm.classList.add("hidden");
  } else {
    // Ensure all required fields are filled
    if (!taskName) document.getElementById("task-name").focus();
    else if (!taskTime) document.getElementById("task-hour").focus();
    else if (!taskDate) document.getElementById("task-date").focus();
  }
});

// function is responsible for adding a task to the user interface:
function addTaskToUI(task) {
  // Create a container for the task
  const taskContainer = document.createElement("div");
  taskContainer.classList.add("task-container"); // a class to the task container for styling.
  taskContainer.setAttribute("data-date", task.date); // the data-date attribute with the task date is for the use of the filter button, so I basically connected the two (added tasks and the filter by date)

  /*Each task will be instructured like this:

<div id="added-tasks-container">
  <!-- Task Container -->
  <div class="task-container">
    <!-- Task Info -->
    <div class="task-info">
      <!-- Task Name -->
      <div class="task-name">Task Name Example</div>
      <!-- Task Time -->
      <div class="task-hour">10:00 AM</div>
      <!-- Task Date -->
      <div class="task-date">2024-06-08</div>
    </div>
  </div>

  <!-- Another Task Container -->
  <div class="task-container">
    <!-- Task Info -->
    <div class="task-info">
      <!-- Task Name -->
      <div class="task-name">Another Task Example</div>
      <!-- Task Time -->
      <div class="task-hour">2:00 PM</div>
      <!-- Task Date -->
      <div class="task-date">2024-06-09</div>
    </div>
  </div>

  <!-- Additional tasks would be structured similarly -->
</div>
*/

  // Create the task information element
  //This div is created to encapsulate the core information about the task (name, time, and date). By assigning it a class (task-info), you can apply specific styles to ensure consistent formatting.
  const taskInfo = document.createElement("div");
  taskInfo.classList.add("task-info");

  // Create checkbox element
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add(`checkbox`);
  //so when clicked a line appears on top of the task
  checkbox.addEventListener("change", function () {
    taskNameElement.style.textDecoration = this.checked
      ? "line-through"
      : "none";
    saveTaskToLocalStorage(task);
  });

  // Create the task name element
  const taskNameElement = document.createElement("div");
  taskNameElement.innerText = task.name;
  taskNameElement.classList.add("task-name");

  // Create the task time element
  const taskTimeElement = document.createElement("div");
  taskTimeElement.innerText = task.time;
  taskTimeElement.classList.add("task-hour");

  // Create the task date element and format it to day/month/year
  const taskDateElement = document.createElement("div");
  const date = new Date(task.date);
  const formattedDate = date.toLocaleString("en-IL", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  taskDateElement.innerText = formattedDate;
  taskDateElement.classList.add("task-date");

  //----------------------------------
  // Create a delete button element
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "×";

  // Add an event listener to the delete button
  deleteButton.addEventListener("click", () => {
    // Remove the task container from the UI
    taskContainer.remove();
    // Remove the task from local storage
    removeTaskFromLocalStorage(task);
  });

  // Append the task details, time, and date to the task info
  taskInfo.appendChild(taskNameElement);

  taskInfo.appendChild(taskTimeElement);
  taskInfo.appendChild(taskDateElement);

  //Append the checkbox
  taskContainer.appendChild(checkbox);

  // Append the delete button to the task info
  taskInfo.appendChild(deleteButton);

  // Append the task info to the task container
  taskContainer.appendChild(taskInfo);

  // Add the task container to the main container
  addedTasksContainer.appendChild(taskContainer);

  // Function to remove a task from local storage
  function removeTaskFromLocalStorage(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let index = tasks.findIndex(
      (t) =>
        t.name === task.name && t.time === task.time && t.date === task.date
    );
    if (index !== -1) {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }
}

// Function to save a task to local storage

// Retrieves the tasks from local storage. If there are no tasks, it initializes an empty array.
function saveTaskToLocalStorage(task) {
  let tasks = [];
  document.querySelectorAll(".task-container").forEach((container) => {
    let task = {
      name: container.querySelector(".task-name").innerText,
      time: container.querySelector(".task-hour").innerText,
      date: container.getAttribute("data-date"),
      checked: container.querySelector(".checkbox").checked,
    };
    tasks.push(task);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Function to load tasks from local storage when page is refreshed
function loadTasksFromLocalStorage() {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  //Iterates over each task in the tasks array and adds it to the UI using the addTaskToUI function.
  tasks.forEach((task) => addTaskToUI(task));
}

//---------------------------------------------------------------

//6. USING BUTTON HOME TO CONNECT IN BTWEEN THE PAGES

document.getElementById("home-btn").addEventListener("click", function () {
  window.location.href = "indexFrontPage.html";
});

//---------------------------------------------------------------

//7. FILTER BUTTON

//calling all the variables for the filter button, the date container and the clear button:
let filterButton = document.getElementById("filterButton");
let dateRangePickerContainer = document.getElementById(
  "dateRangePickerContainer"
);
let clearFilterButton = document.getElementById("clearFilter");
const closeDatePicker = document.getElementById("closeDatePicker");

// toggles the visibility of the dateRangePickerContainer when the filterButton is clicked:
filterButton.addEventListener("click", function () {
  //The getBoundingClientRect() method returns a DOMRect object providing information about the element's position and dimensions:
  let buttonRect = filterButton.getBoundingClientRect();
  dateRangePickerContainer.style.display =
    //The ternary operator ? : is used to check if the current display style is none. If it is none, it sets the display style to block, making the container visible. If it is not none, it sets the display style to none, hiding the container.
    dateRangePickerContainer.style.display === "none" ? "block" : "none";

  //sets focus on the start date input field
  if (dateRangePickerContainer.style.display === "block") {
    document.getElementById("startDate").focus();
  }
});

//gets the start and end dates from the input fields from the applyDateRangeFilter button created in the html file, converts them to Date objects, and then calls the filterTasksByDateRange function:
document
  .getElementById("applyDateRangeFilter")
  .addEventListener("click", function () {
    let startDate = new Date(document.getElementById("startDate").value);
    let endDate = new Date(document.getElementById("endDate").value);
    filterTasksByDateRange(startDate, endDate);
    dateRangePickerContainer.style.display = "none";
  });

//resets the filter and show all tasks
clearFilterButton.addEventListener("click", function () {
  clearFilter();
});

//so the little x button on the top right closes the whole datRangePickerContainer when clicked on
closeDatePicker.addEventListener("click", function () {
  dateRangePickerContainer.style.display = "none";
});

//This function filters the tasks based on the provided start and end dates. It selects all task elements (task-container) and checks if the task's date (retrieved from the data-date attribute) falls within the specified date range. Tasks within the range are displayed; others are hidden.
function filterTasksByDateRange(startDate, endDate) {
  let tasks = document.querySelectorAll(".task-container");

  tasks.forEach((task) => {
    //attribute created within the function addTaskToUI in the tasks part of the code
    let taskDate = new Date(task.getAttribute("data-date"));

    if (taskDate >= startDate && taskDate <= endDate) {
      task.style.display = "block";
    } else {
      task.style.display = "none";
    }
  });
}

//calling the function created above:
function clearFilter() {
  let tasks = document.querySelectorAll(".task-container");

  tasks.forEach((task) => {
    task.style.display = "block";
  });
}
