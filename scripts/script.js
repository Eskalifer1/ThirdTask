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
    allowSlidePrev: false,
    slidesOffsetAfter: 20,
    slidesOffsetBefore: 10
})