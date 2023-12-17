document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
});

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    // You can add code here to handle the form submission, e.g., sending data to a server.
    alert('Form submitted!');
});