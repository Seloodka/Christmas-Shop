const burgerIcon = document.querySelector(".burger-icon");
const burgerMenu = document.querySelector(".burger-wrapper");

const burgerMenuClickHandler = (event) => {
  const scrollWidth = window.innerWidth - document.documentElement.clientWidth;

  burgerIcon.classList.toggle("burger-open");
  burgerMenu.classList.toggle("burger-closed");
  
  document.body.classList.toggle("prevent-scroll");
  document.body.style.marginRight = scrollWidth + "px";
}

burgerIcon.addEventListener('click', burgerMenuClickHandler);