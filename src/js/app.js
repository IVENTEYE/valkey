import * as checkingFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';

checkingFunctions.isWebp();

console.log("Hello");

// const swiperSliderLeft = new Swiper('.slider-left', {
//   speed: 400,
//   spaceBetween: 100,
// });

if (document.querySelector(".slider-left")) {
    new Swiper('.slider-left', {
        speed: 400,
        spaceBetween: 30,
        autoplay: {
            delay: 5000,
        },
        effect: "fade",
        loop: true,
    });
}

if (document.querySelector(".slider-right")) {
    new Swiper('.slider-right', {
        speed: 400,
        spaceBetween: 30,
        autoplay: {
            delay: 4500,
        },
        effect: "fade",
        loop: true,
    });
}