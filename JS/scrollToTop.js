const scrollToTopButton = document.querySelector(".top-button");

const isMobile = () => {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

const scrollTopHandler = (event) => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
}

const scrollHandlerEvent = (event) => {
    if (window.scrollY > 250) {
    scrollToTopButton.classList.remove("top-button-hidden");
    scrollToTopButton.classList.add("anim-show");
  } else {
    scrollToTopButton.classList.add("top-button-hidden");
    scrollToTopButton.classList.remove("anim-show");
  }
}

document.addEventListener('scroll', scrollHandlerEvent);

if (isMobile()) {
  scrollToTopButton.addEventListener('touchend', scrollTopHandler);
} else {
  scrollToTopButton.addEventListener('click', scrollTopHandler);
}

