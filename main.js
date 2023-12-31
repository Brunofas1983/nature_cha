
AOS.init();

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: true,
    speed: 2000,
    slidesPerView: 2,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".produtos", {
    loop: true,
    autoplay: true,
    speed: 2000,
    slidesPerView: 4,
    spaceBetween: 10,
    centeredSlides: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

//------------------Carrosel MOBILE-------------------//
var swiper = new Swiper(".carrosel-mobile", {
    loop: true,
    autoplay: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".mobile-produtos", {
    loop: true,
    autoplay: true,
    speed: 2000,
    slidesPerView: 1,
    spaceBetween: 20,
    centeredSlides: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

