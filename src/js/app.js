import * as checkingFunctions from './modules/functions.js';
import Swiper from 'swiper/bundle';

checkingFunctions.isWebp();

const header = document.querySelector('.header'),
  iconMenu = document.querySelector('.menu__icon'),
  menuBody = document.querySelector('.menu'),
  cartBtn = document.querySelector('.cart-header__btn'),
  closeMenu = document.querySelector('.top-sidemenu__close'),
  cartMenu = document.querySelector('.cart-header__body'),
  favoriteBtn = document.querySelector('.favorite-header__btn'),
  favoriteMenu = document.querySelector('.favorite-sidemenu');

const removeActive = () => {
  document.body.classList.remove('lock');
  if (cartMenu.classList.contains('_active')) {
    cartMenu.classList.remove('_active');
  }

  if (favoriteMenu.classList.contains('_active')) {
    favoriteMenu.classList.remove('_active');
  }
};

if (iconMenu) {
  iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

// if (cartBtn) {
//   cartBtn.addEventListener('click', () => {
//     cartMenu.classList.add('_active');
//     document.body.classList.add('lock');
//   });
// }

if (favoriteBtn) {
  favoriteBtn.addEventListener('click', () => {
    favoriteMenu.classList.add('_active');
    document.body.classList.add('lock');
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
    centerInsufficientSlides: true,
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
    // oldPrice: 2690,
    price: 2290,
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  2: {
    title: 'Зип-худи «Mindset»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br> — Материал: кашкорсе (французский трикотаж) + футер 3-х нитка </br> — Плотность 380гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов',
    oldPrice: 4950,
    price: 4290,
    images: ['img/cards/02/02.jpg', 'img/cards/02/02-hover.jpg', 'img/cards/02/02-sizes.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  3: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: 2690,
    price: 2290,
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  4: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: 2690,
    price: 2290,
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  5: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: 2690,
    price: 2290,
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
  6: {
    title: 'Футболка «Focus»',
    description:
      'Focus on your dreams, goals, actions, losses, victories, failures, pain, discipline and the future',
    characteristics:
      '— Оверсайз крой </br>  — 100% хлопок </br> — Плотность 180гр/м² </br> — DTF износостойкий принт </br> — Принт сзади/спереди </br> — Стирка при 30 градусов </br> ➕В подарок — вход в ТГК с музыкой в стиле real, а также самые лучшие фонки и эксклюзивные песни с фразами из разных аниме',
    oldPrice: 2690,
    price: 2290,
    images: ['img/cards/01/01.jpg', 'img/cards/01/01-hover.jpg', 'img/cards/01/01.jpg'],
    sizes: ['46 RU / S', '48 RU / M', '50 RU / L', '52 RU / XL', '54 RU / XXL'],
  },
};

const popupLinks = document.querySelectorAll('.popup-link'),
  body = document.querySelector('body'),
  lockPadding = document.querySelectorAll('.lock-padding'), // для фиксированных обьектов
  timeout = 800;

let unlock = true;
let productId;

if (popupLinks.length > 0) {
  popupLinks.forEach((item) => {
    item.addEventListener('click', function (e) {
      const popupName = item.getAttribute('href').replace('#', ''),
        currentPopup = document.getElementById(popupName);
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

    currentPopup.dataset.pid = productId;

    const sliderImages = document.querySelectorAll('.slide-popup__image img'),
      sliderImagesWebp = document.querySelectorAll('.slide-popup__image source'),
      thumbsSliderImages = document.querySelectorAll('.thumbs-slider__slide img'),
      thumbsSliderImagesWebp = document.querySelectorAll('.thumbs-slider__slide source');

    for (let i = 0; i < sliderImages.length; i++) {
      if (sliderImagesWebp.length && thumbsSliderImagesWebp.length) {
        const imagesWebp = product.images[i].replace(/\.(jpg|jpeg|png)$/, '.webp');

        sliderImagesWebp[i].srcset = imagesWebp;
        thumbsSliderImagesWebp[i].srcset = imagesWebp;
      }
      sliderImages[i].src = product.images[i];
      sliderImages[i].alt = product.title;
      thumbsSliderImages[i].src = product.images[i];
      thumbsSliderImages[i].alt = product.title;
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
    productId = null;
    popupActive.dataset.pid = '';
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

const addToCart = (productButton, productId) => {
  const cartCount = document.querySelector('.cart-header__count');

  if (productId) {
    updateCart(productButton, productId);
  }
};

const updateCart = (productButton, productId, isProductAdd = true) => {
  const productsContainer = document.querySelector('.items-sidemenu');
  const currentProduct = products[productId];

  const cart = document.querySelector('.cart-header');
  const cartIcon = document.querySelector('.cart-header__count');
  const cartQuantity = cartIcon.querySelector('span');
  const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
  const cartList = document.querySelector('.cart-list');

  if (!cartProduct) {
    const product = document.querySelector(`[data-pid="${productId}"]`);
    const cartProductImage = product.querySelector('.item-card__photo').innerHTML;
    const cartProductTitle = product.querySelector('.info-card__title').textContent;
    const cartProductOldPrice = product.querySelector('.cost-card__item--old span').textContent;
    const cartProductPrice = product.querySelector('.cost-card__item span').textContent;

    const discountPercent =
      'oldPrice' in currentProduct
        ? Math.round(100 - (currentProduct.price / currentProduct.oldPrice) * 100)
        : 0;

    let productTemplate = `
        <article data-cart-pid="${productId}" class="items-sidemenu__item">
            <div class="items-sidemenu__image">
              ${cartProductImage}
            </div>
            <div class="items-sidemenu__info info-items">
              <div class="info-items__top top-info">
                <div class="top-info__column">
                  <h4 class="top-info__title">${cartProductTitle}</h4>
                  <div class="top-info__size">Размер: <span>46 RU / S</span></div>
                </div>
                <div class="top-info__column">
                  <div class="top-info__cost cost-card">
                  ${
                    cartProductOldPrice.length
                      ? `<span class="cost-card__item cost-card__item--old">${cartProductOldPrice} ₽</span>`
                      : ''
                  }
                    <span class="cost-card__item">${cartProductPrice} ₽</span>
                  </div>
                  ${
                    discountPercent > 0
                      ? `<div class="top-info__discound">Save <span>${discountPercent}%</span></div>`
                      : ''
                  }
                </div>
              </div>
              <div class="info-items__actions actions-info">
                <div class="actions-info__quantity quantity">
                  <div class="quantity__body">
                    <button class="quantity__btn quantity__btn--minus" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                          fill="#fff"
                          d="M96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320z"
                        />
                      </svg>
                    </button>
                    <span class="quantity__result">1</span>
                    <button class="quantity__btn quantity__btn--plus" type="button">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                        <path
                          fill="#fff"
                          d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <div class="actions-info__delete delete-actions">
                  <button class="delete-actions__btn" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                      <path
                        d="M232.7 69.9C237.1 56.8 249.3 48 263.1 48L377 48C390.8 48 403 56.8 407.4 69.9L416 96L512 96C529.7 96 544 110.3 544 128C544 145.7 529.7 160 512 160L128 160C110.3 160 96 145.7 96 128C96 110.3 110.3 96 128 96L224 96L232.7 69.9zM128 208L512 208L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 208zM216 272C202.7 272 192 282.7 192 296L192 488C192 501.3 202.7 512 216 512C229.3 512 240 501.3 240 488L240 296C240 282.7 229.3 272 216 272zM320 272C306.7 272 296 282.7 296 296L296 488C296 501.3 306.7 512 320 512C333.3 512 344 501.3 344 488L344 296C344 282.7 333.3 272 320 272zM424 272C410.7 272 400 282.7 400 296L400 488C400 501.3 410.7 512 424 512C437.3 512 448 501.3 448 488L448 296C448 282.7 437.3 272 424 272z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </article>
        `;
    productsContainer.insertAdjacentHTML('beforeend', productTemplate);

  } else {
    const cartProductQuantity = cartProduct.querySelector(".quantity__result");
    cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
  }

  if (isProductAdd) {
    if (cartQuantity) {
      cartQuantity.innerHTML = ++cartQuantity.innerHTML;
    } else {
      cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
    }
  } else {
    const cartProductQuantity = cartProduct.querySelector('.quantity__result');
    cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
    
    if (!parseInt(cartProductQuantity.innerHTML)) {
      cartProduct.remove();
    }

    const cartQuantityValue = --cartQuantity.innerHTML;

    if (cartQuantityValue) {
      cartQuantity.innerHTML = cartQuantityValue;
    } else {
      cartQuantity.remove();
    }
  }
};

const documentActions = (e) => {
  const targetElement = e.target;

  if (!targetElement.closest('.sidemenu__body') && targetElement.closest('.sidemenu._active')) {
    cartMenu.classList.remove('_active');
    favoriteMenu.classList.remove('_active');
    document.body.classList.remove('lock');
  }

  if (!targetElement.closest('.body-layout__menu')) {
    iconMenu.classList.remove('_active');
    menuBody.classList.remove('_active');
  }

  if (targetElement.closest('.top-sidemenu__close')) {
    removeActive();
  }

  if (targetElement.closest('.btn-characteristics__btn')) {
    const productId = targetElement.closest('.buy-popup').dataset.pid;
    addToCart(targetElement, productId);
    popupClose(targetElement.closest('.buy-popup'));
    e.preventDefault();
  }

  if (targetElement.classList.contains('cart-header') || targetElement.closest('.cart-header')) {
    cartMenu.classList.add('_active');
    document.body.classList.add('lock');
  }

  if (targetElement.closest('.delete-actions__btn')) {
    const productId = targetElement.closest('.items-sidemenu__item').dataset.cartPid;
    updateCart(targetElement, productId, false);
    e.preventDefault();
  }
};

document.addEventListener('click', documentActions);

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
