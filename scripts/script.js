const swiper = new Swiper(".swiper", {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView:5,
    simulateTouch:false,
    touchRatio: 0.25,
    speed:800,
    spaceBetween: 30,
    // allowSlidePrev: false,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 10,
    breakpoints: {
        1090:{
            slidesPerView:5
        },
        890:{
            slidesPerView: 4.5
        },
        810:{
            slidesPerView: 4.3
        },
        780:{
            slidesPerView: 4
        },
        690:{
            slidesPerView: 3.5
        },
        595:{
            slidesPerView: 3
        },
        490:{
            slidesPerView: 2.5
        },
        400:{
            slidesPerView: 2
        },
        360:{
            slidesPerView: 1.5,
        },
        320:{
            slidesPerView: 1
        }
    }
});
const close = document.querySelector(".close");
const burger = document.querySelector(".header__menu")
close.addEventListener("click", function(){
    document.querySelector(".advertisement").classList.add("none")
}, {passive: true})
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
    document.querySelector(".navbar__menu").classList.toggle("active");
    document.querySelector(".navbar__buttons").classList.toggle("active");
}, {passive: true})