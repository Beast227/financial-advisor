// script.js
function showAlert() {
    alert('Thank you for reaching out!');
}

document.getElementById('mobile-menu').addEventListener('click', function() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
});