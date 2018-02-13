$(document).ready(function(){

    // DelayReveal
    // $(function(){
    //     setTimeout(function(){
    //         $("#delayReveal").show();
    //     }, 1500);
    // });

    // Smooth Scroll
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
    });

    // Delay reveal
    // $("#delayReveal").delay(2000).fadeIn(500);

    // site preloader
    $(window).load(function(){
	    $('.se-pre-con').fadeOut('slow',function(){$(this).remove();});
	});

    // Main Overlay Menu Functionality
    $("#overlay-menu").click(function() {
        $(".overlay").addClass("overlay-open");
        $('body').addClass("noScroll");
    });

	$(".overlay-close").click(function() {
        $(".overlay").removeClass("overlay-open");
        $('body').removeClass("noScroll");
    });

    // News Slider
    // $('#js_news_slider').slick({
    //     arrows: true,
    //     autoplay: false,
    //     cssEase: 'linear',
    //     dots: false,
    //     fade: true,
    //     infinite: false,
    //     prevArrow: '<img src="/assets/img/left_caret.png" class="prevArrow" />',
    //     nextArrow: '<img src="/assets/img/right_caret.png" class="nextArrow" />',
    //     speed: 500
    // });

}); // Close of jQuery
