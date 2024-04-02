function checkStickyElementPosition(stickyElementId) {
    const stickyElement = document.getElementById(stickyElementId);
    const footer = document.querySelector('footer');

    // Create an Intersection Observer with a rootMargin of 50px
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
        rootMargin: '10px',
        threshold: 0,
    });

    // Observe the footer
    observer.observe(footer);
}

document.addEventListener('DOMContentLoaded', function() {
    checkStickyElementPosition('sticky-cta');
});
