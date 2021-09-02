const form_link = document.querySelector(".sign-up__button");
const form_popup = document.querySelector(".popup--success");
const form_close = document.querySelector(".popup--success .popup__button");

form_link.addEventListener("click", function (event) {
  event.preventDefault();
  form_popup.classList.add("popup--show");
});
form_close.addEventListener("click", function (event) {
  event.preventDefault();
  form_popup.classList.remove("popup--show");
});
