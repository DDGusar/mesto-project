import "../index.css";
import { initUserInfo, getInitialCards } from "./api";

import {
  openProfilePopup,
  profilePopup,
  cardPopup,
  imagePopup,
  avatarPopup,
  formAddCard,
  formProfileEdit,
  formAvatarEdit,
  profileEditBtn,
  profileAddBtn,
  profileCloseBtn,
  profileAvatarEditBtn,
  cardCloseBtn,
  imageCloseBtn,
  avatarCloseBtn,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleAvatarFormSubmit,
} from "./modal.js";

import { enableValidation } from "./validate.js";
import { closePopup, openPopup } from "./utils.js";

profileEditBtn.addEventListener("click", function () {
  openProfilePopup();
  openPopup(profilePopup);
});
profileAddBtn.addEventListener("click", function () {
  openPopup(cardPopup);
});
profileAvatarEditBtn.addEventListener("click", function () {
  openPopup(avatarPopup);
});
profileCloseBtn.addEventListener("click", function () {
  closePopup(profilePopup);
});
cardCloseBtn.addEventListener("click", function () {
  closePopup(cardPopup);
});
avatarCloseBtn.addEventListener("click", function () {
  closePopup(avatarPopup);
});
imageCloseBtn.addEventListener("click", function () {
  closePopup(imagePopup);
});
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", handleCardFormSubmit);
formAvatarEdit.addEventListener("submit", handleAvatarFormSubmit);

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__text-error_active",
});

initUserInfo();
getInitialCards();
