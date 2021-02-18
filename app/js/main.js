'use scrict';

$(function () {
    $('.testimonial__slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });
});

//Скролл на отзывах

const sliderText = document.querySelectorAll('.slider__text');

sliderText.forEach(item => {
    const itemHeight = getComputedStyle(item).height;
    const px = parseFloat(itemHeight);

    if (px > 250) {
        item.style.cssText = `overflow-y: scroll; max-height: 250px`;

    }
})


//Хедер-бургер

const burger = document.querySelector('.menu-burger'),
menuBody = document.querySelector('.header__menu-body');


burger.addEventListener('click', ()=>{
    burger.classList.toggle('menu-burger__active');
    menuBody.classList.toggle('header__menu-body--show');
})


