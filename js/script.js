$(document).ready(function(){
    $(".header-content").owlCarousel( {
        items: 1,
        loop: true,
        dots: true
    });
});
$(document).ready(function(){
    $(".slide").owlCarousel( {
        items: 4,
        loop: true,
        responsive:{
            0:{
                items: 1
            },
            400:{
                items: 2
            },
            576:{
                items: 2
            },
            768:{
                items: 3
            },
            992:{
                items: 4
            }
        }
    });
});
$('.burger-menu').on('click', function (e) {
    e.preventDefault();
    $('.burger-menu').toggleClass('burger-open');
    $('.menu').toggleClass('menu-show')
});