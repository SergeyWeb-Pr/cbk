// Подключение свайпера
import Swiper, {
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from 'swiper';
Swiper.use([Autoplay, Navigation, Pagination, Scrollbar]);

const hero__swiper = new Swiper('.hero__swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

const preview__swiper = new Swiper('.preview__swiper', {
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 3500,
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

const htmmUseSwiper = new Swiper('.htmm-use__swiper', {
  slidesPerView: 4,
  spaceBetween: 24,
  navigation: {
    prevEl: ".htmm-use__swiper-button-prev",
    nextEl: ".htmm-use__swiper-button-next",
  },
  pagination: {
    el: ".htmm-use__swiper-pagination",
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

const interviewSwiper = new Swiper('.interview__swiper', {
  slidesPerView: 1.14,
  loop: false,
  spaceBetween: 24,
  navigation: {
    prevEl: ".interview__swiper-button-prev",
    nextEl: ".interview__swiper-button-next",
  },
  pagination: {
    el: ".interview__swiper-pagination",
    clickable: true
  },
});

var imagesGallerySwiper = new Swiper('.images-gallery__swiper', {
  slidesPerView: 1,
  loop: false,
  spaceBetween: 16,

});
var imagesGallerySwiperThumbs = new Swiper('.images-gallery__swiper-thumbs', {
  spaceBetween: 16,
  slideToClickedSlide: true,
  loop: false,
  slidesPerView: 6,
  navigation: {
    prevEl: ".images-gallery__swiper-button-prev",
    nextEl: ".images-gallery__swiper-button-next",
  },
  pagination: {
    el: ".images-gallery__swiper-pagination",
    clickable: true
  },
});
// imagesGallerySwiper.controller.control = imagesGallerySwiperThumbs;
// imagesGallerySwiperThumbs.controller.control = imagesGallerySwiper;

const otherSwiper = new Swiper('.other__swiper', {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    prevEl: ".other__swiper-button-prev",
    nextEl: ".other__swiper-button-next",
  },
  pagination: {
    el: ".other__swiper-pagination",
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


var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  freeMode: true,
  mousewheel: true,
  mousewheelControl: true,
  parallax: true,
  speed: 600,
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    draggable: true,
    dragSize: 100,
  },
});

$(document).ready(function () {
  $('.card-button-more').on('click', function () {
    $(this).toggleClass('active');
    $(this).siblings('.card-text-show').toggleClass('active');
  });
});
