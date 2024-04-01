function checkStickyElementPosition(stickyElementId) {
    var stickyElement = document.getElementById(stickyElementId);
    var stickyElementOriginalPosition = stickyElement.getBoundingClientRect().top + document.querySelector('footer').offsetHeight/3;

    window.onscroll = function() {
        if (window.pageYOffset >= stickyElementOriginalPosition) {
            stickyElement.classList.add('stuck');
        } else {
            stickyElement.classList.remove('stuck');
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    checkStickyElementPosition('sticky-cta');
});
