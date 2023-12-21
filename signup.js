document.getElementById("signinBtn").onclick = function() {
    nameField.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");

    // Assuming the input fields have IDs "emailField" and "passwordField"
    const enteredEmail = document.getElementById("emailField").value;
    const enteredPassword = document.getElementById("passwordField").value;

    // Hardcoded username and password
    const correctUsername = "varin@google.com";
    const correctPassword = "password123";

    // Check if entered username and password match the hardcoded values
    if (!signinBtn.classList.contains("disable")) {
        if (enteredEmail === correctUsername && enteredPassword === correctPassword) {
            if (enteredEmail.trim() !== '' && enteredPassword.trim() !== '') {
                // Sign in successful
                window.location.href = '../Main web/index.html';
            }
        } else {
            // Incorrect username or password
            // You might want to display an error message on the webpage instead of using an alert
        }
    }
};

document.getElementById("signupBtn").onclick = function() {
    nameField.style.maxHeight = "60px";
    title.innerHTML = "Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");

    // Assuming the input fields have IDs "nameinput", "emailField", and "passwordField"
    const enteredName = document.getElementById("nameinput").value;
    const enteredEmail = document.getElementById("emailField").value;
    const enteredPassword = document.getElementById("passwordField").value;

    // Hardcoded username and password
    const correctName = "Harivardhan";
    const correctUsername = "varin@google.com";
    const correctPassword = "password123";

    // Check if entered username and password match the hardcoded values
    if (!signupBtn.classList.contains("disable")) {
        if (enteredEmail === correctUsername && enteredPassword === correctPassword && enteredName === correctName) {
            if (enteredName.trim() !== '' && enteredEmail.trim() !== '' && enteredPassword.trim() !== '') {
                // Sign up successful
                window.location.href = '../Main web/index.html';
            }
        } else {
            // Username is already used or invalid input
            // You might want to display an error message on the webpage instead of using an alert
        }
    }
};
