import { createCard, cardContainer } from "./card.js";

export function addCard(cardObject) {
  const cardElement = createCard(cardObject);
  cardContainer.prepend(cardElement);
}

function closeEscPopup(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeEscPopup);
}
export function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeEscPopup);
}
export function renderLoading(element, btnText, onLoad) {
  if (onLoad) {
    element.textContent = "Сохранение...";
  } else {
    element.textContent = btnText;
  }
}
