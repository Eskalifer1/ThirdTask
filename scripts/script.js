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
const burger = document.querySelector(".header__menu");
const header = document.querySelector(".header");
close.addEventListener("click", function(){
    document.querySelector(".advertisement").classList.add("none")
    header.style.top = 0;
}, {passive: true})
burger.addEventListener("click", function(){
    burger.classList.toggle("active");
    document.querySelector("body").classList.toggle("lock");
    header.classList.toggle("active");
}, {passive: true})
function orientationChecker(){
    windowHeight = document.documentElement.clientHeight;
    windowWidth = document.documentElement.clientWidth;
    if(windowWidth > (windowHeight - 60)){
        document.querySelector("body").classList.add("resize");
    } else document.querySelector("body").classList.remove("resize");
}
window.addEventListener("load", orientationChecker, {passive: true})
window.addEventListener('resize',orientationChecker, {passive: true});