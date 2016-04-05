$(document).ready(function() {

// Main Menu
$('.js-main-menu').click(function() {
    var sidebar = $('.sidebar');

    if (sidebar.hasClass('js-active')) {
        sidebar.removeClass('js-active');    
        $(this).removeClass('js-active');    
    } else {
        sidebar.addClass('js-active');    
        $(this).addClass('js-active');    
    }
});



// Slider Config (Sticky)
$('.slider').slick({
    arrows: true,
    draggable: false,
    swipeToSlide: true,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true,
            }
        }
    ]
});



});
