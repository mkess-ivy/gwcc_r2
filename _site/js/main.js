
$(document).ready(function(){

    // site preloader
    $(window).load(function(){
	    $('.se-pre-con').fadeOut('slow',function(){$(this).remove();});
	});

    // Mobile Programs Menu
    $("#js_programs_menu_btn").click(function() {
        $("#programs_menu_list").slideToggle('fade');
    });

    // Accordion
    $('.accordion-item .heading').on('click', function(e) {
        e.preventDefault();

        if($(this).closest('.accordion-item').hasClass('active')) {
            $('.accordion-item').removeClass('active');
        } else {

            $('.accordion-item').removeClass('active');
            $(this).closest('.accordion-item').addClass('active');
        }

        var $content = $(this).next();
        $content.slideToggle(100);
        $('.accordion-item .content').not($content).slideUp('fast');
    });

    // Accordion
    $('.docs-accordion-item .docs-heading').on('click', function(e) {
        e.preventDefault();

        if($(this).closest('.docs-accordion-item').hasClass('active')) {

            $('.docs-accordion-item').removeClass('active');
        } else {
            $('.docs-accordion-item').removeClass('active');

            $(this).closest('.docs-accordion-item').addClass('active');
        }

        var $content = $(this).next();
        $content.slideToggle(100);
        $('.docs-accordion-item .docs-content').not($content).slideUp('fast');
    });


    // Smooth Scroll
    $('a[href^="#top"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
          'scrollTop': $target.offset().top
        }, 900, 'swing', function () {
          window.location.hash = target;
        });
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

    // Highlights Slider
    $('.highlights__slider').slick ({
        autoplay:false,
        arrows: true,
        fade: true,
        cssEase: 'linear',
        infinite:true,
        prevArrow: '<img src="/assets/img/left_caret.png" class="caret_slide_web left" />',
        nextArrow: '<img src="/assets/img/right_caret.png" class="caret_slide_web right" />'
    });


}); // Close of jQuery
