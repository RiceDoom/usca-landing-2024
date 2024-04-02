function checkStickyElementPosition(stickyElementId) {
    const stickyElement = document.getElementById(stickyElementId);
    const footer = document.querySelector('footer');
    const nav = document.querySelector('nav'); // Add this line to select the navigation element

    // Create an Intersection Observer with a rootMargin of 10px
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                stickyElement.classList.add('stuck');
            } else {
                stickyElement.classList.remove('stuck');
            }
        });
    }, {
        root: null,
        rootMargin: '5px',
        threshold: 0,
    });

    // Observe both the footer and the navigation
    observer.observe(footer);
    observer.observe(nav); // Add this line to observe the navigation
}

document.addEventListener('DOMContentLoaded', function() {
    checkStickyElementPosition('sticky-cta');
});
