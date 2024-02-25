document.addEventListener("DOMContentLoaded", function() {
    var logo = document.getElementById('logo');

    setInterval(function() {
        if (logo.style.display === 'flex') {
            logo.style.display = 'none';
        } else {
            logo.style.display = 'flex';
        }
    }, 2000); // Toggle display every 2 seconds
});