import * as checkingFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';

checkingFunctions.isWebp();

const header = document.querySelector('.header'),
  iconMenu = document.querySelector('.menu__icon'),
  menuBody = document.querySelector('.menu'),
  cartBtn = document.querySelector('.cart-header__btn'),
  closeCartBtn = document.querySelector('.top-sidemenu__close'),
  cartMenu = document.querySelector('.cart-header__body');

const documentActions = (e) => {
  const targetElement = e.target;

  if (!targetElement.closest('.sidemenu__body') && targetElement.closest('.sidemenu._active')) {
    cartMenu.classList.remove('_active');
    document.body.classList.remove('lock');
  }

  if (!targetElement.closest(".body-layout__menu")) {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }
};

document.addEventListener('click', documentActions);

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

if (cartBtn) {
  cartBtn.addEventListener('click', () => {
    cartMenu.classList.add('_active');
    document.body.classList.add('lock');
  });

  closeCartBtn.addEventListener('click', () => {
    cartMenu.classList.remove('_active');
    document.body.classList.remove('lock');
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

if (document.querySelector('.slider-popup')) {
  let thumbsSlider = new Swiper('.thumbs-slider', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  new Swiper('.slider-popup', {
    speed: 400,
    spaceBetween: 30,
    effect: 'fade',
    thumbs: {
      swiper: thumbsSlider,
    },
  });
}

const products = {
  1: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: '2690 ₽',
    price: '2290 ₽',
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  2: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: '2690 ₽',
    price: '2290 ₽',
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  3: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: '2690 ₽',
    price: '2290 ₽',
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  4: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: '2690 ₽',
    price: '2290 ₽',
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  5: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: '2690 ₽',
    price: '2290 ₽',
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  6: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: '2690 ₽',
    price: '2290 ₽',
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
};

const popupLinks = document.querySelectorAll('.popup-link'),
  body = document.querySelector('body'),
  lockPadding = document.querySelectorAll('.lock-padding'), // для фиксированных обьектов
  timeout = 800;

let unlock = true;

if (popupLinks.length > 0) {
  popupLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      const popupName = item.getAttribute('href').replace('#', ''),
        currentPopup = document.getElementById(popupName),
        productId = item.closest('.item-card').dataset.pid;
      popupOpen(currentPopup, productId);
      e.preventDefault();
    });
  });
}

const popupCloseIcon = document.querySelectorAll('.close-popup');

if (popupCloseIcon.length > 0) {
  popupCloseIcon.forEach((item) => {
    item.addEventListener('click', function (e) {
      popupClose(item.closest('.popup'));
      e.preventDefault();
    });
  });
}

function popupOpen(currentPopup, productId) {
  if (currentPopup && unlock) {
    const popupActive = document.querySelector('.popup.active');
    const product = products[productId];

    if (!product) return;

    const sliderImages = document.querySelectorAll('.slide-popup__image img'),
      thumbsSliderImages = document.querySelectorAll('.thumbs-slider__slide img');

    for (let i = 0; i < sliderImages.length; i++) {
      sliderImages[i].src = product.images[i];
      thumbsSliderImages[i].src = product.images[i];
    }

    document.querySelector('.body-characteristics__title').textContent = product.title;
    document.querySelector('.cost-card__item--old').textContent = product.oldPrice;
    document.querySelector('.cost-card__item').textContent = product.price;

    const description = document.querySelectorAll('.body-characteristics__descrybe p');
    description[0].innerHTML = product.description;
    description[1].innerHTML = product.characteristics;

    const sizes = document.querySelectorAll('.item-characteristics__size span');
    for (let i = 0; i < sizes.length; i++) {
      sizes[i].textContent = product.sizes[i];
    }

    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    currentPopup.classList.add('active');
    currentPopup.addEventListener('click', function (e) {
      if (!e.target.closest('.popup__content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnLock = true) {
  if (unlock) {
    popupActive.classList.remove('active');
    if (doUnLock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  const lockPaddingValue =
    window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  if (lockPadding.langth > 0) {
    lockPadding.forEach((item) => {
      item.style.paddingRight = lockPaddingValue;
    });
  }
  body.style.paddingRight = lockPaddingValue;
  body.classList.add('lock'); // в css добавить body.lock overflow: hidden;

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  setTimeout(function () {
    if (lockPadding.length > 0) {
      lockPadding.forEach((item) => {
        item.style.paddingRight = '0px';
      });
    }
    body.style.paddingRight = '0px';
    body.classList.remove('lock');
  }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

document.addEventListener('keydown', (e) => {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.active');
    popupClose(popupActive);
  }
});

(function () {
  //проверяем поддержку
  if (Element.prototype.closest) {
    // реализуем
    Element.prototype.closest = function (css) {
      var node = this;
      while (node) {
        if (node.matches(css)) return node;
        else node = node.parentElement;
      }
      return null;
    };
  }
})();
(function () {
  if (Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector;
  }
})();
