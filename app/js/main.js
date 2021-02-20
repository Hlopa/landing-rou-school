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


burger.addEventListener('click', () => {
    burger.classList.toggle('menu-burger__active');
    menuBody.classList.toggle('header__menu-body--show');
})


//Анимация при скролле

let bodyWidth = document.documentElement.clientWidth;

if(bodyWidth > 950){

    let isScrolling = false;

    window.addEventListener("scroll", throttleScroll, false);
    
    function throttleScroll(e) {
        if (isScrolling == false) {
            window.requestAnimationFrame(function () {
                scrolling(e);
                isScrolling = false;
            });
        }
        isScrolling = true;
    };
    
    const advantagesSection = document.querySelector('.advantages'),
        advantagesItem1 = advantagesSection.querySelector('.advantages__item--1'),
        advantagesItem2 = advantagesSection.querySelector('.advantages__item--2'),
        advantagesItem3 = advantagesSection.querySelector('.advantages__item--3');
    
    const featuresSection = document.querySelector('.features'),
        featuresColumn1 = document.querySelector('.features__box-column--1'),
        featuresColumn2 = document.querySelector('.features__box-column--2'),
        featuresColumn3 = document.querySelector('.features__box-column--3');
    
    
    function isPartiallyVisible(el, num) {
        let elementBoundary = el.getBoundingClientRect();
        let top = elementBoundary.top - num;
        let bottom = elementBoundary.bottom;
        let height = elementBoundary.height - num;
        return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    };
    
    function addClasses(elem, arr) {
        arr.forEach(clas => {
            elem.classList.add(`${clas}`)
        })
        return elem
    };
    
    document.addEventListener("DOMContentLoaded", scrolling, false);
    
    function scrolling(e) {
        if (isPartiallyVisible(advantagesSection, 20)) {
            addClasses(advantagesItem1, ['animate__animated', 'animate__backInLeft', 'animate__delay-3s']);
            addClasses(advantagesItem2, ['animate__animated', 'animate__backInLeft', 'animate__delay-2s']);
            addClasses(advantagesItem3, ['animate__animated', 'animate__backInLeft', 'animate__delay-1s']);
        };
    
        if (isPartiallyVisible(featuresSection, 20)) {
            addClasses(featuresColumn1, ['animate__animated', 'animate__flipInY', 'animate__delay-3s']);
            addClasses(featuresColumn2, ['animate__animated', 'animate__flipInY', 'animate__delay-2s']);
            addClasses(featuresColumn3, ['animate__animated', 'animate__flipInY', 'animate__delay-1s']);
        }
    
    };
    
}





