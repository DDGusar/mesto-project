import "../index.css";
import { initUserInfo, getInitialCards } from "./api";
import { setUserInfo, setAvatar, setMyID } from "./userInfo";
import { addCards } from "./card";
import {
  openProfilePopup,
  profilePopup,
  cardPopup,
  imagePopup,
  cardDeletePopup,
  avatarPopup,
  formAddCard,
  formProfileEdit,
  formAvatarEdit,
  formDeleteCard,
  profileEditBtn,
  profileAddBtn,
  profileCloseBtn,
  profileAvatarEditBtn,
  cardCloseBtn,
  deleteCardCloseBtn,
  imageCloseBtn,
  avatarCloseBtn,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleAvatarFormSubmit,
  handleDeleteCardFormSubmit,
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
deleteCardCloseBtn.addEventListener("click", function () {
  closePopup(cardDeletePopup);
});
formProfileEdit.addEventListener("submit", handleProfileFormSubmit);
formAddCard.addEventListener("submit", handleCardFormSubmit);
formAvatarEdit.addEventListener("submit", handleAvatarFormSubmit);
formDeleteCard.addEventListener("submit", handleDeleteCardFormSubmit);

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__text",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_inactive",
  inputErrorClass: "popup__text_type_error",
  errorClass: "popup__text-error_active",
});

initUserInfo()
  .then((profileInfo) => {
    setUserInfo(profileInfo.name, profileInfo.about);
    setAvatar(profileInfo.avatar);
    setMyID(profileInfo);
  })
  .catch((err) => {
    `Ошибка: ${err}`;
  });
getInitialCards()
  .then((cards) => {
    addCards(cards);
  })
  .catch((err) => {
    `Ошибка: ${err}`;
  });
