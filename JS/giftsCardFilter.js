import { cardsContainer } from './globalVars.js';

const filterCard = (filter, card) => {
  if (filter === "all") {
    return card;
  }

  if (card.dataset.cardType === filter) {
    return card;
  }
  return "";
}


const cards = document.querySelectorAll(".card");
const filterButtons = document.querySelectorAll(".filter-button");
const cardsInContainer = cardsContainer.children;

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currButton = document.querySelector(".current-filter"); 

    if (button === currButton) {
      return;
    }

    const filter = button.dataset.filter;

    button.classList.toggle("current-filter");
    currButton.classList.toggle("current-filter");
    
    [...cardsInContainer].forEach((card) => card.remove());
    cards.forEach((card) => cardsContainer.append(filterCard(filter, card)));
  })
})