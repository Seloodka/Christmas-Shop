const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".card-modal");
const modalContent = {
  image: modal.querySelector(".image-container"),
  tag: modal.querySelector(".card-tag"),
  name: modal.querySelector(".card-title"),
  description: modal.querySelector(".card-description"),
  stats: modal.querySelectorAll(".stat"),
}