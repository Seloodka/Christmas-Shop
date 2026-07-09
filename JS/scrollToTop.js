const scrollToTopButton = document.querySelector(".top-button");

document.addEventListener('scroll', (event) => {

  if (window.scrollY > 250) {
    scrollToTopButton.classList.remove("top-button-hidden");
  } else {
    scrollToTopButton.classList.add("top-button-hidden");
  }

});

scrollToTopButton.addEventListener('click', () => window.scrollTo({
  top: 0,
  left: 0,
  behavior: "smooth"
}));