$(document).ready(function () {

    // Mobile Menu Accordion
    $(".menu-pages span").click(function () {
        $(".menu-pages").toggleClass("menu-pages-open");

        if ($(".menu-pages span i").hasClass("fa-chevron-right")) {
            $(".menu-pages span i").removeClass("fa-chevron-right")
            $(".menu-pages span i").addClass("fa-chevron-down")
        }
        else {
            $(".menu-pages span i").addClass("fa-chevron-right")
            $(".menu-pages span i").removeClass("fa-chevron-down")
        }
    })

    //Mobile Menu Open/Close
    $(".menu-btn").click(function () {
        $(".menu").toggleClass("menu-open");
    })

    //Slider
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
    }).on('changed.owl.carousel', function (event) {
        // Remove the previous animation classes
        $('.item .text span').removeClass('animate__animated animate__fadeInUp');
        $('.item .text h1').removeClass('animate__animated animate__fadeInUp');
        $('.item .text p').removeClass('animate__animated animate__fadeInUp');
        $('.item .text a').removeClass('animate__animated animate__fadeInUp');
        $('.item .sale').removeClass('animate__animated animate__rotateInDownRight');

        // Select the current slide's text element and add the animation classes
        var currentSlide = event.item.index;
        $('.item .text').eq(currentSlide).find('h1').addClass('animate__animated animate__fadeInUp');
        $('.item .text').eq(currentSlide).find('p').addClass('animate__animated animate__fadeInUp');
        $('.item .text').eq(currentSlide).find('span').addClass('animate__animated animate__fadeInUp');
        $('.item .text').eq(currentSlide).find('a').addClass('animate__animated animate__fadeInUp');
        $('.item').eq(currentSlide).find('.sale').addClass('animate__animated animate__rotateInDownRight');
    });

    var owl = $('.owl-carousel');
    owl.owlCarousel();
    $('#slider .fa-chevron-right').click(function () {
        owl.trigger('next.owl.carousel');
    })
    $('#slider .fa-chevron-left').click(function () {
        owl.trigger('prev.owl.carousel', [300]);
    })

})