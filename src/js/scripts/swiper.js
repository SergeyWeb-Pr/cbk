// Подключение свайпера
import Swiper, {
  Autoplay,
  Navigation,
  Pagination
} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination]);

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

const forestryslider__swiper = new Swiper('.forestry-slider__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: ".forestry-slider__swiper-button-prev",
    nextEl: ".forestry-slider__swiper-button-next",
  },
  pagination: {
    el: ".forestry-slider__swiper-pagination",
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

const protectionslider__swiper = new Swiper('.protection-slider__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: ".protection-slider__swiper-button-prev",
    nextEl: ".protection-slider__swiper-button-next",
  },
  pagination: {
    el: ".protection-slider__swiper-pagination",
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

const caringsociety__swiper = new Swiper('.caring-society__swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: ".caring-society__swiper-button-prev",
    nextEl: ".caring-society__swiper-button-next",
  },
  pagination: {
    el: ".caring-society__swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
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

const offsetPartnersSwiper = new Swiper('.offset-partners__swiper', {
  slidesPerView: 5,
  spaceBetween: 24,
  navigation: {
    prevEl: ".offset-partners__swiper-button-prev",
    nextEl: ".offset-partners__swiper-button-next",
  },
  pagination: {
    el: ".offset-partners__swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1201: {
      slidesPerView: 5,
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

const offsetUseSwiper = new Swiper('.offset-use__swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: ".offset-use__swiper-button-prev",
    nextEl: ".offset-use__swiper-button-next",
  },
  pagination: {
    el: ".offset-use__swiper-pagination",
    clickable: true
  },
  breakpoints: {
    1201: {
      slidesPerView: 3,
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

$(document).ready(function () {
  $('.card-button-more').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings('.card-text-show').toggleClass('active');
  });
});
