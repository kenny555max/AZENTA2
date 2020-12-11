$(document).ready(function(){
    $('.set-bg').each(function(){
        let bg = $(this).data('setbg')
        $(this).css(
            'background-image', 'url(' + bg + ')'
        )
    })
    $('.toggle').click(function(){
        $('.topNav').addClass('active');
        $('header').addClass('showcase');
    })
    $('.cancel').click(function(){
        $('.topNav').removeClass('active');
        $('header').removeClass('showcase');
    })

    $(window).resize(function(){
        if ($(window).width() > 767) {
            $('header').remove('style');
        }
    })
    // $('.topNav').click(function(){
    //     $(this).removeClass('active');
    //     $('header').removeClass('showcase');
    // })

    $('.banner').owlCarousel({
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartspeed: 1200,
        nav: false,
        dots: false,
        loop: true,
        autoplay: true
    });


    $('select').niceSelect();



    $('.hovering-image').owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true,
        dots: true,
        nav: false,
        smartSpeed: 1200,
        responsive: {
            1200:{
                items: 3,
            },
            991:{
                items: 2,
            },
            767:{
                items: 1,
            },
            500: {
                items: 1,
            },
            0: {
                items: 1,
            }
        }
    });


    $('.video-popup').magnificPopup({
        type: 'iframe'
    });



    $('.properties').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        smartSpeed: 1200,
        dots: false,
        nav: true,
    });



    $('.hovering-cards').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1200,
        items: 4,
        margin: 20,
        dots: false,
        nav: true,
        responsive: {
            1200:{
                items: 4,
            },
            1199:{
                items: 4,
            },
            991:{
                items: 3,
            },
            767:{
                items: 2,
            },
            500:{
                items: 2,
            },
            0:{
                items: 1,
            }
        }
    });



    $('.footer-logo').owlCarousel({
        loop: true,
        autoplay: false,
        items: 5,
        responsive: {
            1200: {
                items: 5,
                autoplay: false,
            },
            991:{
                items: 4,
                autoplay: true,
                smartSpeed: 1200,
            },
            768:{
                items: 4,
                autoplay:true,
            },
            500: {
                items: 3,
                autoplay: true,
            },
            375: {
                items: 3,
                autoplay: true,
            },
            0:{
                items: 2,
                autoplay: true,
            }
        }
    });


    // price
    $('#price-range').slider({
        range: true,
        min: 0,
        max: 1600000,
        values: [0, 1000000],
        slide: function(event, ui){
            $('#priceRange').val("[" + ui.values[0] + "-" + ui.values[1] + "]" + "$");
        }
    });
    $('#priceRange').val("[" + $('#price-range').slider("values", 0) + "-" + $('#price-range').slider("values", 1) + "]" + "$");


    
    //price 2
    $("#price-range-P").slider({
        range: true,
        min: 0,
        max: 1600000,
        step: 50,
        values: [50, 1000000],
        slide: function (event, ui) {
            $("#priceRangeP").val("[ " + "$" + ui.values[0] + " - " + "$" + ui.values[1] + " ]");
        }
    });
    $("#priceRangeP").val("[ " + "$" + $("#price-range-P").slider("values", 0) + " - " + "$" + $("#price-range-P").slider("values", 1) + " ]");


    // .price 3
    // $('#p-price-P').slider({
    //     range: true,
    //     min: 0,
    //     max: 1600000,
    //     step: 50,
    //     values: [50, 1000000],
    //     slide: function (event, ui){
    //         $('#p-price').val("[ " + "$" + ui.values[0] + " - " + "$" + ui.values[1] + " ]");
    //     }
    // });
    // $('#p-price').val("[ " + "$" + $("#p-price-P").slider("values", 0) + " - " + "$" + $("#p-price-P").slider("values", 1) + " ]");


    // // roomsize 3
    // $('#p-size-P').slider({
    //     range: true,
    //     min: 0,
    //     max: 1400,
    //     values: [500, 30000],
    //     slide: function (event, ui) {
    //         $('#p-size').val("[" + ui.values[0] + "-" + ui.values[1] + "]" + "sqft");
    //     }
    // });
    // $('#p-size').val("[" + $('#p-size-P').slider("values", 0) + "-" + $('#p-size-P').slider("values", 1) + "]" + "sqft");


    // roomsize
    $('#room-size-range').slider({
        range: true,
        min: 0,
        max: 4500,
        step: 500,
        values: [500, 3000],
        slide: function(event, ui){
            $('#roomSizeRange').val("[" + ui.values[0] + "-" + ui.values[1] + "]" + "sqft");
        }
    });
    $('#roomSizeRange').val("[" + $('#room-size-range').slider("values", 0) + "-" + $('#room-size-range').slider("values", 1) + "]" + "sqft");
    

    //room size 2
    $("#roomsize-range-P").slider({
        range: true,
        min: 0,
        max: 1400,
        step: 200,
        values: [200, 999],
        slide: function (event, ui) {
            $("#roomsizeRangeP").val("[ " + ui.values[0] + " Fqft" + " - " + ui.values[1] + " Fqft" + " ]");
        }
    });
    $("#roomsizeRangeP").val("[ " + $("#roomsize-range-P").slider("values", 0) + " Fqft" + " - " + $("#roomsize-range-P").slider("values", 1) + " Fqft" + " ]");





    $('.hovering-text').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1200,
        dots: true,
        nav: false,
        items: 1
    });



    $('.hovering-agent').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        items: 4,
        smartSpeed: 1200,
        autoplay: true,
        margin: 20,
        responsive: {
            1200: {
                items: 4,
            },
            991: {
                items: 3,
            },
            768: {
                items: 3,
            },
            767: {
                items: 2,
            },
            500: {
                items: 1,
            },
            375: {
                items: 1,
            },
            280: {
                items: 1,
            }
        }
    });



    $('.pt').click(function(){
        $('.pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.big-image').attr('src');
        if (imgurl != bigImg) {
            $('.big-image').attr({
                src: imgurl
            });
        }
    })
});




