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
  console.log("activeIndex", activeIndex);
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
