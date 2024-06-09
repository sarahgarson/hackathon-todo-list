

// Get the Login button element
const loginButton = document.getElementById('loginButton');

// Add a click event listener to the Login button
loginButton.addEventListener('click', () => {
    // Get the email, username, and password values from the input fields
    const email = document.getElementById('emailInput').value;
    const username = document.getElementById('usernameInput').value;
    const password = document.getElementById('passwordInput').value;

    // Store the email, username, and password in localStorage or sessionStorage
    localStorage.setItem('email', email);
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Redirect to index.html
    window.location.href = 'index.html';
});
