const filterCard = (filter, card) => {
  if (filter === "all") {
    return card;
    console.log('ada')
  }

  if (card.dataset.cardType === filter) {
    return card;
  }
  return "";
}

const filterButtons = document.querySelectorAll(".filter-button");
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card");

console.log(filterButtons);

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currButton = document.querySelector(".current-filter"); 

    if (button === currButton) {
      return;
    }

    const filter = button.dataset.filter;

    button.classList.toggle("current-filter");
    currButton.classList.toggle("current-filter");
    
    cardContainer.innerHTML = "";
    cards.forEach((card) => cardContainer.append(filterCard(filter, card)));

  })
})