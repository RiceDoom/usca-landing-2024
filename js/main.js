function checkStickyElementPosition(stickyElementId) {
    var stickyElement = $('#' + stickyElementId);
    var stickyElementOriginalPosition = stickyElement.offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() >= stickyElementOriginalPosition) {
            stickyElement.css('position', 'sticky');
        } else {
            stickyElement.css('position', 'relative');
        }
    });
}

$(document).ready(function() {
    checkStickyElementPosition('sticky-cta');
});
