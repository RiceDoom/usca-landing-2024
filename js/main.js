function checkStickyElementPosition(stickyElementId) {
    const stickyElement = document.getElementById(stickyElementId);
    const footer = document.querySelector('footer');
    const nav = document.querySelector('nav'); // Added this line to select the navigation element

    // Create an Intersection Observer with a rootMargin of  number of px
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
        rootMargin: '-200px 0px -50px',
        threshold: 0
    });

    // Observe both the footer and the navigation
    observer.observe(footer);
    observer.observe(nav); // Added this line to observe the navigation

    // Check initial position on document load
    if (footer.getBoundingClientRect().top <= window.innerHeight) {
        stickyElement.classList.add('stuck');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // window.scrollTo(0, 0);
    checkStickyElementPosition('sticky-cta');
});




document.addEventListener('DOMContentLoaded', function () {
    const infoModal = document.querySelector('.info-modal');
    const infoModalInnerClose = document.querySelector('.info-modal--inner-close');

    // Show info modal on button click
    document.querySelectorAll('.btn-info').forEach((button) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            infoModal.classList.add('active');
            document.body.classList.add('modal-on');

        });
    });

    // Hide info modal on inner close button click
    infoModalInnerClose.addEventListener('click', function () {
        infoModal.classList.remove('active');
        document.body.classList.remove('modal-on');

    });

    // Hide info modal when clicking outside of it
    infoModal.addEventListener('click', function (event) {
        if (event.target !== this) return;
        infoModal.classList.remove('active');
        document.body.classList.remove('modal-on');

    });
});