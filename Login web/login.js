function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Prepare data to send to the server
  var data = {
    username: username,
    password: password
  };

  // Perform an AJAX request using the Fetch API
  fetch('/your-backend-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(responseData => {
    // Handle the response from the server
    if (responseData.success) {
      alert('Login successful! Redirecting to dashboard.');
       // Redirect to another HTML page
       window.location.href = './index.html';
    } else {
      alert('Login failed. Please check your credentials and try again.');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}
