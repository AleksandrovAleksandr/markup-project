const slider_item1 = document.querySelector(".advantages__item--1");
const slider_item2 = document.querySelector(".advantages__item--2");
const slider_item3 = document.querySelector(".advantages__item--3");
const slider_link1 = document.querySelector(".advantages__toggle--1");
const slider_link2 = document.querySelector(".advantages__toggle--2");
const slider_link3 = document.querySelector(".advantages__toggle--3");

slider_link1.addEventListener("click", function (event) {
  event.preventDefault();
  slider_item1.classList.add("slider__item--show");
  slider_item2.classList.remove("slider__item--show");
  slider_item3.classList.remove("slider__item--show");
  slider_link1.classList.add("advantages__toggle--active");
  slider_link2.classList.remove("advantages__toggle--active");
  slider_link3.classList.remove("advantages__toggle--active");
});
slider_link2.addEventListener("click", function (event) {
  event.preventDefault();
  slider_item1.classList.remove("slider__item--show");
  slider_item2.classList.add("slider__item--show");
  slider_item3.classList.remove("slider__item--show");
  slider_link1.classList.remove("advantages__toggle--active");
  slider_link2.classList.add("advantages__toggle--active");
  slider_link3.classList.remove("advantages__toggle--active");
});
slider_link3.addEventListener("click", function (event) {
  event.preventDefault();
  slider_item1.classList.remove("slider__item--show");
  slider_item2.classList.remove("slider__item--show");
  slider_item3.classList.add("slider__item--show");
  slider_link1.classList.remove("advantages__toggle--active");
  slider_link2.classList.remove("advantages__toggle--active");
  slider_link3.classList.add("advantages__toggle--active");
});
