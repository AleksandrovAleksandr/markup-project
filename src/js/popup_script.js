const link = document.querySelector(".user-list__login");
const popup = document.querySelector(".popup--login");
const close = document.querySelector(".popup__close");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.add("popup--show");
});
close.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.remove("popup--show");
});
