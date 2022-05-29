import "../index.css";
import {
  profilePopup,
  cardPopup,
  imagePopup,
  formAddCard,
  formProfileEdit,
  profileEditBtn,
  profileAddBtn,
  profileCloseBtn,
  cardCloseBtn,
  imageCloseBtn,
  handleProfileFormSubmit,
  handleCardFormSubmit,
} from "./modal.js";

import { enableValidation } from "./validate.js";
import { initialCards } from "./constants.js";
import { addCard, closePopup, openPopup } from "./utils.js";

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
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", handleCardFormSubmit);

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
