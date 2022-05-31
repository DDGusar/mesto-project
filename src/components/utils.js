import { createCard, cardContainer } from "./card.js";

const popups = document.querySelectorAll(".popup");
// cardCaptionValue, cardImageSrc, cardLikes, ownerId
export function addCard(cardObject) {
  const cardElement = createCard(cardObject);
  cardContainer.append(cardElement);
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

popups.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(evt.target);
    }
  });
});
