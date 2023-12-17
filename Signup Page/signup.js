function submitForm() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send data to the server (backend)
    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        alert('Sign up successful!');
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Sign up failed. Please try again.');
    });
}
