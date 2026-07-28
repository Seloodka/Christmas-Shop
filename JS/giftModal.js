const getCardImage = (card) => {
  return card.querySelector("img").cloneNode();
}

const getCardName = (card) => {
  return card.querySelector(".card-title").textContent;
}

const getCardTag = (card) => {
  return card.querySelector(".card-tag").textContent;
}

const setRatingAmount = (stat, scale) => {
  const statRatingAmountElement = stat.querySelector(".rating-amount");
  return statRatingAmountElement.innerHTML = `+${scale * 100}`;
}

const fillStatRatingScale = (stat, scale) => {
  const ratingScale = stat.querySelectorAll("path"); 

  for (let i = 0; i < scale; i++) {
    ratingScale[i].style.fillOpacity = "1";
  }
}

const resetStatRatingScale = (stat) => {
  const ratingScale = stat.querySelectorAll("path"); 

  for (let i = 0; i < ratingScale.length; i++) {
    ratingScale[i].style.fillOpacity = "0.1";
  }
}

const fillStats = (stats, statsRatings) => {

  stats.forEach((stat, index) => {
    const statRatingScale = statsRatings[index];

    setRatingAmount(stat, statRatingScale);
    fillStatRatingScale(stat, statRatingScale);
  })
}

const clearModal = (modal, modalContent) => {
  modalContent.image.firstElementChild.remove();
  modalContent.stats.forEach((stat) => resetStatRatingScale(stat));
}

const cardDescription = {
  work: {
    description: "Uses console.log like a crystal ball to find any issue.",
  },
  health: {
    description: "Gets 10,000 steps a day even while sitting at the computer.",
  },
  harmony: {
    description: "Laughs at code errors like they’re jokes instead of getting angry.",
  }
}

const modal = document.querySelector(".card-modal");

const modalContent = {
  image: modal.querySelector(".image-container"),
  tag: modal.querySelector(".card-tag"),
  name: modal.querySelector(".card-title"),
  description: modal.querySelector(".card-description"),
  stats: modal.querySelectorAll(".stat"),
}

const giftsStats = {
  work: [5, 5, 2, 4],
  health: [4, 3, 5, 4],
  harmony: [3, 2, 5, 5]
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    const cardType = card.dataset.cardType;

    modal.dataset.cardType = cardType;
    modalContent.image.append(getCardImage(card));
    modalContent.name.innerHTML = getCardName(card);
    modalContent.tag.innerHTML = getCardTag(card);
    modalContent.description.innerHTML = cardDescription[cardType].description;

    fillStats(modalContent.stats, giftsStats[cardType]);

    modal.showModal();

    modal.style.marginTop = (document.documentElement.clientHeight - modal.clientHeight) / 2 + "px";
    modal.style.marginLeft = (document.documentElement.clientWidth - modal.clientWidth) / 2 + "px";
  })
})

modal.querySelector(".modal-close").addEventListener("click", () => {
  modal.close();
})

modal.addEventListener('click', (event) => {
    const x = event.clientX;
    const y = event.clientY;

    if (modal.open) {
      const modalPos = modal.getBoundingClientRect();

      if (
        x < modalPos.left || x > modalPos.right || y < modalPos.top || y > modalPos.bottom
      ) {
        setTimeout(() => {
          modal.close();
        }, 0);
      }
    }
});

modal.addEventListener("close", () => {
  clearModal(modal, modalContent);
})