import {cardsArray, cardsContainer} from './globalVars.js';

const getType = (card) => {
  return card.category.split(" ")[1].toLowerCase();
}

const getCardImagePath = (card) => {
  return "../images/gifts/gift-for-" + getType(card) + ".png";
}

const createCardTemplate = (card) => {
  return `
    <article class="card" data-card-type="${getType(card)}">
      <div class="image-container">
        <img src="${getCardImagePath(card)}" alt="Gift ${card.category.toLowerCase()}">
      </div>
      <div class="card-text">
        <span class="card-tag">${card.category}</span>
        <h2 class="card-title">${card.name}</h2>
      </div>
    </article>
  `;
}

const renderCards = (cards, container) => {
  cards.forEach(card => {
    container.insertAdjacentHTML('beforeend', createCardTemplate(card));
  });
}


renderCards(cardsArray, cardsContainer);