import "./index.css";
import {
  profilePopup,
  cardPopup,
  imagePopup,
  formCard,
  formElement,
  profileEditBtn,
  profileAddBtn,
  profileCloseBtn,
  cardCloseBtn,
  imageCloseBtn,
  popups,
  handleProfileFormSubmit,
  handleCardFormSubmit,
} from "./components/modal.js";

import { enableValidation } from "./components/validate.js";
import { initialCards } from "./components/card.js";
import { addCard, closePopup, openPopup } from "./components/utils.js";

document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopup(evt.target.querySelector(".popup_opened"));
  }
});

profileEditBtn.addEventListener("click", function () {
  openPopup(profilePopup);
});
profileAddBtn.addEventListener("click", function () {
  openPopup(cardPopup);
});
profileCloseBtn.addEventListener("click", function () {
  closePopup(profilePopup);
});
cardCloseBtn.addEventListener("click", function () {
  closePopup(cardPopup);
});
imageCloseBtn.addEventListener("click", function () {
  closePopup(imagePopup);
});
formElement.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardFormSubmit);
popups.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      closePopup(evt.target);
    }
  });
});

initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__text-error_active",
});
