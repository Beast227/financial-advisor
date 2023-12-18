// Function to handle login form submission
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Client-side validation
  if (!validateLoginForm(username, password)) {
      alert('Please enter valid credentials.');
      return;
  }

  // Simulate login logic (replace with actual server-side logic)
  alert('Login successful! Redirecting to Home page.');
  // Redirect to another HTML page
  window.location.href = '../Main web/index.html';
}

// Function to handle signup form submission
function signup() {
  var newUsername = document.getElementById('newUsername').value;
  var newPassword = document.getElementById('newPassword').value;

  // Client-side validation
  if (!validateSignupForm(newUsername, newPassword)) {
      alert('Please enter valid signup information.');
      return;
  }

  // Simulate signup logic (replace with actual server-side logic)
  alert('Signup successful! Redirecting to Home page.');
  // Redirect to the home page
  window.location.href = '../Main web/index.html';
}

// Function to validate login form inputs
function validateLoginForm(username, password) {
  // Add your client-side validation logic here
  // For example, check if username and password meet certain criteria
  return username.length > 0 && password.length > 0;
}

// Function to validate signup form inputs
function validateSignupForm(newUsername, newPassword) {
  // Add your client-side validation logic here
  // For example, check if newUsername and newPassword meet certain criteria
  return newUsername.length > 0 && newPassword.length > 0;
}
