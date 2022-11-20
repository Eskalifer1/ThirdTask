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
            slidesPerView: 1.5
        },
        320:{
            slidesPerView: 1
        }
    }
})