import { openImagePopup } from "./modal.js";

export const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;

function toggleLike(evt) {
  evt.target.classList.toggle("card__heart_active");
}
function removeCard(cardElement) {
  cardElement.remove();
}

export function createCard(cardCaptionValue, cardImageSrc) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardCaptionValue;
  const cardPic = cardElement.querySelector(".card__image");
  cardPic.src = cardImageSrc;
  cardPic.alt = cardCaptionValue;
  cardPic.addEventListener("click", function (evt) {
    openImagePopup(cardCaptionValue, cardImageSrc);
  });

  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", toggleLike);
  cardElement
    .querySelector(".card__trash")
    .addEventListener("click", function () {
      removeCard(cardElement);
    });
  return cardElement;
}
