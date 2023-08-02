$(document).ready(function () {

    //Firm Logo Carousel
    var firmLogoSlider = $('#firm-logo-carousel');

    firmLogoSlider.owlCarousel({
        loop: false,
        margin: 10,
        items: 5,
        dots: false,
        responsive: {
            600: {
                items: 1,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 5,
            }
        }
    })

})