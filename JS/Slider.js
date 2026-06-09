const sliderContainer = document.querySelector('.slider-container');
const nextButton = document.querySelector('.slider-next');
const prevButton = document.querySelector('.slider-prev');

const mediaQuery = window.matchMedia('(max-width: 768px)');

let maxSlides = (document.documentElement.clientWidth >= 769) ?  4 : 6;
let margins = (document.documentElement.clientWidth >= 769) ?  164 : 16;

let currSlide = 0;

function updateVariables() {
  if (document.documentElement.clientWidth >= 769) {
    maxSlides = 4
    margins = 164;
  } else {
    maxSlides = 6;
    margins = 16;
  }

  if (currSlide > maxSlides) {
    currSlide = maxSlides;
  }
}

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

mediaQuery.addEventListener('change', updateVariables);

nextButton.addEventListener('click', () => { 
  if (!isActive(nextButton)) {
    return;
  }

  currSlide += 1;
  
  shiftSliderPos((document.querySelector('.page-max-width').clientWidth - margins - sliderContainer.scrollWidth)  / maxSlides * currSlide)
  toggleSliderButton()
});

prevButton.addEventListener('click', () => {
  if (!isActive(prevButton)) {
    return;
  }

  currSlide -= 1;
  
  shiftSliderPos((document.querySelector('.page-max-width').clientWidth - margins - sliderContainer.scrollWidth)  / maxSlides * currSlide)
  toggleSliderButton()
});