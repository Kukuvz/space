$(function () {
    // slider arrows
    $('.slider__box').slick({
        prevArrow: '<button class="slider__arrow slider__arrow-left" type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="arrow-left"></button>',
        nextArrow: '<button class="slider__arrow slider__arrow-right" type="button" class="slick-next"><img src="images/arrow-right.svg" alt="arrow-right"></button>',
    });

    // burger menu
    $('.menu-btn').on('click', function() {
        $('.menu__list').toggleClass('active');
    });
})