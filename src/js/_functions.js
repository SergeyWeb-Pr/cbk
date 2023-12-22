// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import {
  mobileCheck
} from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import {
  burger
} from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);

//Слайдеры
const swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

const block_products__swiper = new Swiper('.block_products__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: ".block_products__swiper-button-prev",
    nextEl: ".block_products__swiper-button-next",
  },
  pagination: {
    el: ".block_products__swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1201: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    769: {
      spaceBetween: 20,
      slidesPerView: 4
    },
    577: {
      spaceBetween: 20,
      slidesPerView: 3
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1
    },
  }
});

const block_develop__swiper = new Swiper('.block_develop__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: ".block_develop__swiper-button-prev",
    nextEl: ".block_develop__swiper-button-next",
  },
  pagination: {
    el: ".block_develop__swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1201: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    769: {
      spaceBetween: 20,
      slidesPerView: 4
    },
    577: {
      spaceBetween: 20,
      slidesPerView: 3
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1
    }
  }
});

const block_news__swiper = new Swiper('.block_news__swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  breakpoints: {
    1201: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    769: {
      spaceBetween: 20,
      slidesPerView: 3
    },
    577: {
      spaceBetween: 20,
      slidesPerView: 2
    },
    320: {
      spaceBetween: 20,
      slidesPerView: 1
    }
  },
  navigation: {
    prevEl: ".block_news__swiper-button-prev",
    nextEl: ".block_news__swiper-button-next",
  },
});
