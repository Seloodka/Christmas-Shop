const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-wrapper");
const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle("burger-open");
  burgerMenu.classList.toggle("burger-closed");
  document.body.classList.toggle("prevent-scroll");

  if (burgerIcon.classList.contains("burger-open")) {
    document.body.style.marginRight = scrollWidth + "px";
  } else {
    document.body.style.marginRight = "0px"
  }
});