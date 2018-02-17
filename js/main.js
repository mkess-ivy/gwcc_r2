$(document).ready(function(){

    // DelayReveal
    // $(function(){
    //     setTimeout(function(){
    //         $("#delayReveal").show();
    //     }, 1500);
    // });

    // site preloader
    $(window).load(function(){
	    $('.se-pre-con').fadeOut('slow',function(){$(this).remove();});
	});

    // Accordion
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.accordion-item').hasClass('active')) {
            // Remove active classes
            $('.accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

    // Accordion
    $('.docs-accordion-item .docs-heading').on('click', function(e) {
        e.preventDefault();

        // Add the correct active class
        if($(this).closest('.docs-accordion-item').hasClass('active')) {
            // Remove active classes
            $('.docs-accordion-item').removeClass('active');
        } else {
            // Remove active classes
            $('.docs-accordion-item').removeClass('active');

            // Add the active class
            $(this).closest('.docs-accordion-item').addClass('active');
        }

        // Show the content
        var $content = $(this).next();
        $content.slideToggle(100);
        $('.docs-accordion-item .docs-content').not($content).slideUp('fast');
    });

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

    // Main Overlay Menu Functionality
    $("#overlay-menu").click(function() {
        $(".overlay").addClass("overlay-open");
        $('body').addClass("noScroll");
    });

	$(".overlay-close").click(function() {
        $(".overlay").removeClass("overlay-open");
        $('body').removeClass("noScroll");
    });

    // Programs Overlay Menu Functionality - Mobile
    $("#js_programs_overlay_menu").click(function() {
        $(".programs_overlay").addClass("programs_overlay_open");
        $('body').addClass("noScroll");
    });

	$(".programs_overlay_close").click(function() {
        $(".programs_overlay").removeClass("programs_overlay_open");
        $('body').removeClass("noScroll");
    });

    // Programs Overlay Menu Functionality - Desktop
    $("#js_programs_overlay_menu_desktop").click(function() {
        $(".programs_overlay").addClass("programs_overlay_open_desktop");
        $('body').addClass("noScroll");
    });

	$(".programs_overlay_close_desktop").click(function() {
        $(".programs_overlay").removeClass("programs_overlay_open_desktop");
        $('body').removeClass("noScroll");
    });

}); // Close of jQuery
