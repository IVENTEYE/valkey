import * as checkingFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';

checkingFunctions.isWebp();

const header = document.querySelector('.header'),
  iconMenu = document.querySelector('.menu__icon'),
  menuBody = document.querySelector('.menu');

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
    document.body.classList.toggle('lock');
  });
}

const removeClassMenu = () => {
  iconMenu.classList.remove('_active');
  menuBody.classList.remove('_active');
};

const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    header.classList.remove('_scroll');
  } else {
    header.classList.add('_scroll');
  }
};

window.addEventListener('scroll', () => {
  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(header);
});

if (document.querySelector('.slider-left')) {
  new Swiper('.slider-left', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
    },
    effect: 'fade',
    loop: true,
  });
}

if (document.querySelector('.slider-right')) {
  new Swiper('.slider-right', {
    speed: 400,
    spaceBetween: 30,
    autoplay: {
      delay: 4500,
    },
    effect: 'fade',
    loop: true,
  });
}
