const burgerButton = document.querySelector(".burger__button");
const burgerMenu = document.querySelector(".burger");

function burgerClickToggler() {
  burgerButton.classList.toggle("burger__button_opened");
  burgerMenu.classList.toggle("burger_opened");
}

burgerButton.addEventListener("click", () => burgerClickToggler());
