import { createCard, cardContainer } from "./card.js";
import { profileTitle, profileSubtitle, nameInput, jobInput } from "./modal.js";

const popups = document.querySelectorAll(".popup");

export function addCard(cardCaptionValue, cardImageSrc) {
  const cardElement = createCard(cardCaptionValue, cardImageSrc);
  cardContainer.prepend(cardElement);
}

function closeEscPopup(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
}

export function openPopup(popup) {
  popup.classList.add("popup_opened");
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;

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
