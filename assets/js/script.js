$(document).ready(function () {
    $('nav ul li').click(function () {
        $(this).find('.drop').toggleClass("show-drop");
        $(this).find('.fa-sort-down').toggleClass("i-hide")
        $(this).find('.fa-sort-up').toggleClass('i-show')
        // $(this).find('.drop').slideToggle(5000)     
    });
    $('.show-menu').click(function () {
        $('nav').addClass('show-nav')
    })
    $('.cross').click(function () {
        $('nav').removeClass('show-nav')
    });

    $('.item-drp').click(function(){
        $(this).find('.drp-2').toggleClass('drp-3')
        $(this).find('.fa-square-plus').toggleClass('drp-hide')
        $(this).find('.fa-square-minus').toggleClass('drp-show')
    })


    $(".owl-carousel").owlCarousel({
        items:1,
        loop:true,
        nav:false,
        dots:true,
        autoplay:true,
        autoplayTimeout:2000,
    });

})