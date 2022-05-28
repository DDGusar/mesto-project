import { createCard, cardContainer } from "./card.js";
export function addCard(cardCaptionValue, cardImageSrc) {
  const cardElement = createCard(cardCaptionValue, cardImageSrc);
  cardContainer.prepend(cardElement);
}
export function openPopup(popup) {
  popup.classList.add("popup_opened");
}
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
