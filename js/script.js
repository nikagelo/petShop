// First slider JS
const nextBtn = document.querySelector("#next"),
  prevBtn = document.querySelector("#prev"),
  sliders = document.querySelectorAll(".sliderItem");
let activeIndex = 0;

function initSlider() {
  nextBtn.addEventListener("click", showNextSlide);
  prevBtn.addEventListener("click", showPrevSlide);

  renderSlides();
}

function renderSlides() {
  sliders.forEach((slide, i) => {
    if (i === activeIndex) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function showNextSlide() {
  if (activeIndex === sliders.length - 1) {
    activeIndex = 0;
  } else {
    activeIndex++;
  }
  renderSlides();
}

function showPrevSlide() {
  if (activeIndex === 0) {
    activeIndex = sliders.length - 1;
  } else {
    activeIndex--;
  }
  renderSlides();
}
initSlider();

//Products JS
const nextBtnProducts = document.querySelector("#nextProducts"),
  prevBtnProducts = document.querySelector("#prevProducts"),
  slidersProducts = document.querySelectorAll(".sliderItemTop");
let activeIndexProducts = 0;

function initSliderProducts() {
  nextBtnProducts.addEventListener("click", showNextSlideProduct);
  prevBtnProducts.addEventListener("click", showPrevSlideProduct);

  renderSlidesProduct();
}

function renderSlidesProduct() {
  slidersProducts.forEach((slide, i) => {
    if (i === activeIndexProducts) {
      slide.classList.add("active");
    } else {
      slide.classList.remove("active");
    }
  });
}

function showNextSlideProduct() {
  if (activeIndexProducts === slidersProducts.length - 1) {
    activeIndexProducts = 0;
  } else {
    activeIndexProducts++;
  }
  renderSlidesProduct();
}

function showPrevSlideProduct() {
  if (activeIndexProducts === 0) {
    activeIndexProducts = slidersProducts.length - 1;
  } else {
    activeIndexProducts--;
  }
  renderSlidesProduct();
}
initSliderProducts();
// Best Selllers JS

const nextBtnBestSeller = document.querySelector("#nextBestSeller"),
  prevBtnBestSeller = document.querySelector("#prevBestSeller"),
  slidersBestSeller = document.querySelectorAll(".bestSellerItem");
let activeBestSeller = 0;

function initSliderBestSeller() {
  nextBtnBestSeller.addEventListener("click", showNextSlideBestSeller);
  prevBtnBestSeller.addEventListener("click", showPrevSlideBestSeller);

  renderSlidesBestSeller();
}

function renderSlidesBestSeller() {
  slidersBestSeller.forEach((slide, i) => {
    if (i === activeBestSeller) {
      slide.classList.add("activeBestSeller");
    } else {
      slide.classList.remove("activeBestSeller");
    }
  });
}

function showNextSlideBestSeller() {
  if (activeBestSeller === slidersBestSeller.length - 1) {
    activeBestSeller = 0;
  } else {
    activeBestSeller++;
  }
  renderSlidesBestSeller();
}

function showPrevSlideBestSeller() {
  if (activeBestSeller === 0) {
    activeBestSeller = slidersBestSeller.length - 1;
  } else {
    activeBestSeller--;
  }
  renderSlidesBestSeller();
}
initSliderBestSeller();
// Latest

const nextBtnLatest = document.querySelector("#nextLatest"),
  prevBtnLatest = document.querySelector("#prevLatest"),
  slidersLatest = document.querySelectorAll(".sliderItemLatest");
let activeLatest = 0;

function initSliderLatest() {
  nextBtnLatest.addEventListener("click", showNextSlideLatest);
  prevBtnLatest.addEventListener("click", showPrevSlideLatest);

  renderSlidesLatest();
}

function renderSlidesLatest() {
  slidersLatest.forEach((slide, i) => {
    if (i === activeLatest) {
      slide.classList.add("activeLatest");
    } else {
      slide.classList.remove("activeLatest");
    }
  });
}

function showNextSlideLatest() {
  if (activeLatest === slidersLatest.length - 1) {
    activeLatest = 0;
  } else {
    activeLatest++;
  }
  renderSlidesLatest();
}

function showPrevSlideLatest() {
  if (activeLatest === 0) {
    activeLatest = slidersLatest.length - 1;
  } else {
    activeLatest--;
  }
  renderSlidesLatest();
}
initSliderLatest();
