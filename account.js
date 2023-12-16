 // Check if localStorage is supported by the browser
 if (typeof(Storage) !== "undefined") {
    // Function to save data to localStorage
    function saveData() {
        var key = "user_name"; // Example key
        var value = document.getElementById("usernameInput").value; // Get value from input field

        // Save data to localStorage
        localStorage.setItem(key, value);

        // Display a message
        alert("Data saved successfully!");
    }

    // Function to load data from localStorage
    function loadData() {
        var key = "user_name"; // Example key
        var savedValue = localStorage.getItem(key);

        // Display the saved value
        alert("Saved data: " + savedValue);
    }
} else {
    // Browser doesn't support localStorage
    alert("Sorry, your browser does not support Web Storage.");
}