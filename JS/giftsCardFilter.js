const filterCard = (filter, card) => {
  if (filter === "all") {
    return card;
  }

  if (card.dataset.cardType === filter) {
    return card;
  }
  return "";
}

const filterButtons = document.querySelectorAll(".filter-button");
const cardContainer = document.querySelector(".card-container");
const cardsInContainer = cardContainer.children;
const cards = document.querySelectorAll(".card");

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
    cards.forEach((card) => cardContainer.append(filterCard(filter, card)));
  })
})