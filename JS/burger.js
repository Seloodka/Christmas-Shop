const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-wrapper");

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle("burger-open");
  burgerMenu.classList.toggle("burger-closed");
})