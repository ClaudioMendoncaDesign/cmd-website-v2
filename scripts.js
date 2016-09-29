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

$('.intro-slider').slick({
    arrows: false,
    draggable: false,
    swipeToSlide: true,
    autoplay: true,
    fade: true,
    infinite: true,
    speed: 5000,
    autoplaySpeed: 1000,
    responsive: [
        {
            breakpoint: 800,
            settings: {
                draggable: true,
            }
        }
    ]
});

// $(function() {

//   var $quote = $(".quote__text");
  
//   // var $numWords = $quote.text().split(" ").length;
//   var $numWords = $quote.length;
//   console.log($numWords);
  
//   if (($numWords >= 1) && ($numWords < 100)) {
//       $quote.addClass('quote--short');
//   }
//   else {
//       $quote.addClass('quote--long');
//   }    

// });


});
