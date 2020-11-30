// Owl
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    dots: true,
    autoPlay: true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: true,
            loop: true,
        },
        600: {
            items: 2,
            dots: true,
            nav: true,
            loop: true
        },
        1000: {
            items: 3.5,
            dots: false,
            nav: true,
            loop: true,
        }
    }
});

// 2
$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 12,
    nav: true,
    dots: true,
    autoPlay: true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            dots: true,
            nav: true,
            loop: true,
        },
    }
});
