const sliderContainer = document.querySelector('.slider-container');
const nextButton = document.querySelector('.slider-next');
const prevButton = document.querySelector('.slider-prev');
const shiftPos = (document.documentElement.clientWidth >= 769) ?  300 : 300;
const maxSlides = (document.documentElement.clientWidth >= 769) ?  4 : 6;
let currSlide = 0;

console.log(sliderContainer, nextButton, prevButton);

function toggleSliderButton() {
  if (currSlide === 0) {
    return prevButton.classList.add('non-active');
  } 
  if (currSlide === maxSlides) {
    return nextButton.classList.add('non-active');
  } 
  
  return document.querySelectorAll('.slider-button')
  .forEach((button) => button.classList.remove('non-active'));
}

nextButton.addEventListener('click', () => {
 
  if (nextButton.matches('.non-active')) {
    console.log('ban')
    return;
  }

  currSlide += 1;
  sliderContainer.style.transform = `translateX(${-shiftPos*currSlide}px)`;

  toggleSliderButton()
});

prevButton.addEventListener('click', () => {
  if (prevButton.matches('.non-active')) {
    console.log('ban')
    return;
  }
  currSlide -= 1;
  sliderContainer.style.transform = `translateX(${-shiftPos*currSlide}px)`;
  
  toggleSliderButton()
});