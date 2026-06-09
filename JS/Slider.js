const sliderContainer = document.querySelector('.slider-container');
const nextButton = document.querySelector('.slider-next');
const prevButton = document.querySelector('.slider-prev');

const mediaQuery = window.matchMedia('(max-width: 768px)');

let maxSlides = (document.body.clientWidth >= 768) ?  4 : 6;
let margins = (document.body.clientWidth >= 768) ?  164 : 16;

let currSlide = 0;

function toggleSliderButton() {
  prevButton.classList.toggle('non-active', currSlide === 0);
  nextButton.classList.toggle('non-active', currSlide === maxSlides);
}

function shiftSliderPos() {
  const layoutWidth = document.querySelector('.page-max-width').clientWidth;
  const sliderWidth = sliderContainer.scrollWidth;
  const newPos = (layoutWidth - margins - sliderWidth)  / maxSlides * currSlide;

  sliderContainer.style.transform = `translateX(${newPos}px)`;
}

function isActive(button) {
  if (button.matches('.non-active')) {
    console.log('ban')
    return false;
  }

  return true;
}

function changeSlide(direction) {
  if (direction === 'next' && (nextButton.matches('non-active'))) return;
  if (direction === 'prev' && (prevButton.matches('non-active'))) return;

  currSlide += (direction === 'next') ? 1 : -1

  toggleSliderButton()
  shiftSliderPos()
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

  toggleSliderButton()
  shiftSliderPos()
}

mediaQuery.addEventListener('change', updateVariables);

nextButton.addEventListener('click', () => changeSlide('next'));

prevButton.addEventListener('click', () => changeSlide('prev'));