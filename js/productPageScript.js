const readMoreBtn = document.querySelector("#infoBtn");
const text = document.querySelector("#productTxt");

readMoreBtn.addEventListener("click", (e) => {
  text.classList.toggle("show-more");
  if (readMoreBtn.innerText === "მეტის ნახვა") {
    readMoreBtn.innerText = "დახურვა";
  } else {
    readMoreBtn.innerText = "მეტის ნახვა";
  }
});
// Counter
const add = document.querySelector("#add"),
  minus = document.querySelector("#minus"),
  count = document.querySelector("#count");
let cart = 1;
add.addEventListener("click", (e) => {
  count.innerHTML = cart++;
});
minus.addEventListener("click", (e) => {
  if (cart >= 0) {
    count.innerHTML = cart--;
  }
});
// Pictures Slider
let first = document.querySelector("#firstImg"),
  second = document.querySelector("#secondImg"),
  third = document.querySelector("#thirdImg"),
  fourth = document.querySelector("#fourthImg");
function changeImage(fileName) {
  banner = document.querySelector("#bannerImg");
  banner.setAttribute("src", fileName);
}
// first.addEventListener("click", changeImage("images/foodFront.png"));
// second.addEventListener("click", changeImage("images/foodBack.png"));
// third.addEventListener("click", changeImage("images/foodTypes.png"));
// fourth.addEventListener("click", changeImage("images/foodVideo.png"));
