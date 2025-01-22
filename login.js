// login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting normally

    // Get username and password values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulate checking users stored in localStorage or other database
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if the user exists and if the password is correct
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // If user found and password matches, store login status
        localStorage.setItem('loggedInUser', JSON.stringify(user));

        // Redirect to index.html after successful login
        window.location.href = 'index.html';
    } else {
        alert('Invalid username or password');
    }
});
