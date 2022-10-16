// First Swiper
let swiperMain = new Swiper(".swiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
//Products JS
var swiperProducts = new Swiper(".swiperProducts", {
  slidesPerView: 4,
  spaceBetween: 26,
  navigation: {
    nextEl: ".swiper-button-next-product",
    prevEl: ".swiper-button-prev-product",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
// Best Selllers JS
var swiperBestSeller = new Swiper(".swiperBestSeller", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-best",
    prevEl: ".swiper-button-prev-best",
  },
});
// Latest
var swiperLatest = new Swiper(".swiper-latest", {
  slidesPerView: 4,
  spaceBetween: 26,
  navigation: {
    nextEl: ".swiper-button-next-latest",
    prevEl: ".swiper-button-prev-latest",
  },
});
// Brand
var swiperBrand = new Swiper(".swiper-brand", {
  slidesPerView: 6,
  spaceBetween: 0,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },

  loop: true,
});
