const sliderContainer = document.querySelector('.slider-container');
const nextButton = document.querySelector('.slider-next');
const prevButton = document.querySelector('.slider-prev');

const maxSlides = (document.documentElement.clientWidth >= 769) ?  4 : 6;

let currSlide = 0;



function toggleSliderButton() {
  if (currSlide === 0) {
    return prevButton.classList.add('non-active');
  } 
  if (currSlide === maxSlides) {
    return nextButton.classList.add('non-active');
  } 
  
  document.querySelectorAll('.slider-button')
  .forEach((button) => button.classList.remove('non-active'));
}

function shiftSliderPos(pos) {
  sliderContainer.style.transform = `translateX(${pos}px)`;
}

function isActive(button) {
  if (button.matches('.non-active')) {
    console.log('ban')
    return false;
  }

  return true;
}

nextButton.addEventListener('click', () => { 
  if (!isActive(nextButton)) {
    return;
  }

  currSlide += 1;
  
  shiftSliderPos((document.querySelector('.page-max-width').clientWidth - 164 - sliderContainer.scrollWidth)  / maxSlides * currSlide)
  toggleSliderButton()
});

prevButton.addEventListener('click', () => {
  if (!isActive(prevButton)) {
    return;
  }

  currSlide -= 1;
  
  shiftSliderPos((document.querySelector('.page-max-width').clientWidth - 164 - sliderContainer.scrollWidth)  / maxSlides * currSlide)
  toggleSliderButton()
});