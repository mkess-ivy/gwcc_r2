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

    // Programs Overlay Menu Functionality
    $("#js_programs_overlay_menu").click(function() {
        $(".programs_overlay").addClass("programs_overlay_open");
        $('body').addClass("noScroll");
    });

	$(".programs_overlay_close").click(function() {
        $(".programs_overlay").removeClass("programs_overlay_open");
        $('body').removeClass("noScroll");
    });

}); // Close of jQuery
