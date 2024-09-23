document.addEventListener("DOMContentLoaded", function() {
    // Wait for the DOM content to load
    const fadeOut = document.getElementById('fade-out');

    // Initial slide-up animation after a delay
    setTimeout(function() {
        fadeOut.classList.add('show');
    }, 1500); // 3 seconds delay

    // Click event for the store link
    document.getElementById('store-link').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior
        
        // Hide the fade-out overlay
        fadeOut.classList.remove('show');
        
        // Prevent scrolling while the overlay is hidden
        document.body.classList.remove('no-scroll');
        
        // Wait for the transition to complete
        setTimeout(function() {
            // Redirect to the store link after the slide-down animation completes
            window.location.href = 'https://mcmodels.net/vendors/114/novua';
        }, 1000); // Adjust this delay to match the transition duration in CSS (1.5 seconds in this example)
    });


    
    // Show/hide the no-scroll class based on the fade-out overlay
    fadeOut.addEventListener('transitionend', function() {
        if (!fadeOut.classList.contains('show')) {
            document.body.classList.remove('no-scroll');
        } else {
            
        }
    });
});
