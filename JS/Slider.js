const sliderContainer = document.querySelector('.slider-container');
const nextButton = document.querySelector('.slider-next');
const prevButton = document.querySelector('.slider-prev');

const mediaQuery = window.matchMedia('(max-width: 768px)');

let maxSlides = (document.documentElement.clientWidth >= 769) ?  4 : 6;
let margins = (document.documentElement.clientWidth >= 769) ?  164 : 16;

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

function changeSlide(button) {
  
  if (!isActive(button)) {
    return;
  }

  if (button == nextButton) {
    currSlide += 1;
  } else {
    currSlide -= 1;
  }

  const layoutWidth = document.querySelector('.page-max-width').clientWidth;
  const sliderWidth = sliderContainer.scrollWidth;

  shiftSliderPos((layoutWidth - margins - sliderWidth)  / maxSlides * currSlide)
  toggleSliderButton()
}

function updateVariables() {
  if (mediaQuery.matches) {
    maxSlides = 6;
    margins = 16;
  } else {
    maxSlides = 4
    margins = 164;
  }

  if (currSlide > maxSlides) {
    currSlide = maxSlides;
  }
}

mediaQuery.addEventListener('change', updateVariables);

nextButton.addEventListener('click', () => changeSlide(nextButton));

prevButton.addEventListener('click', () => changeSlide(prevButton));