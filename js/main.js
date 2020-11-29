// Owl
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 12,
    nav: false,
    dots: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false,
            loop: true
        },
        600: {
            items: 2,
            nav: false
        },
        1000: {
            items: 3.5,
            nav: false,
            loop: false
        }
    }
});