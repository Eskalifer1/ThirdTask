const swiper=new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:5,simulateTouch:!1,touchRatio:.25,speed:800,spaceBetween:30,slidesOffsetAfter:20,slidesOffsetBefore:10,breakpoints:{1090:{slidesPerView:5},890:{slidesPerView:4.5},810:{slidesPerView:4.3},780:{slidesPerView:4},690:{slidesPerView:3.5},595:{slidesPerView:3},490:{slidesPerView:2.5},400:{slidesPerView:2},360:{slidesPerView:1.5},320:{slidesPerView:1}}}),close=document.querySelector(".close"),burger=document.querySelector(".header__menu"),header=document.querySelector(".header"),body=document.querySelector("body");function orientationChecker(){windowHeight=document.documentElement.clientHeight,windowWidth=document.documentElement.clientWidth,windowWidth>windowHeight?body.classList.add("resize"):body.classList.remove("resize")}close.addEventListener("click",function(){document.querySelector(".advertisement").classList.add("none"),header.style.top=0},{passive:!0}),burger.addEventListener("click",function(){burger.classList.toggle("active"),body.classList.toggle("lock"),header.classList.toggle("active")},{passive:!0}),window.addEventListener("load",orientationChecker,{passive:!0}),window.addEventListener("resize",orientationChecker,{passive:!0});