import { openImagePopup } from "./modal.js";

export const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;
export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export function createCard(cardCaptionValue, cardImageSrc) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardCaptionValue;
  const cardPic = cardElement.querySelector(".card__image");
  cardPic.src = cardImageSrc;
  cardPic.alt = cardCaptionValue;
  cardPic.addEventListener("click", function (evt) {
    openImagePopup(evt.target.alt, evt.target.src);
  });

  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__heart_active");
    });
  cardElement
    .querySelector(".card__trash")
    .addEventListener("click", function (evt) {
      cardElement.remove();
    });
  return cardElement;
}
