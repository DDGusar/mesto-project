import "../index.css";
import { initUserInfo, getInitialCards } from "./api";
import { setUserInfo, setAvatar, setMyID } from "./userInfo";
import { addCards } from "./card";
import {
  openProfilePopup,
  profilePopup,
  cardPopup,
  avatarPopup,
  formAddCard,
  formProfileEdit,
  formAvatarEdit,
  formDeleteCard,
  profileEditBtn,
  profileAddBtn,
  profileAvatarEditBtn,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleAvatarFormSubmit,
  handleDeleteCardFormSubmit,
  popups,
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

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__cross")) {
      closePopup(popup);
    }
  });
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

Promise.all([initUserInfo(), getInitialCards()])
  .then(([profileInfo, cards]) => {
    setUserInfo(profileInfo.name, profileInfo.about);
    setAvatar(profileInfo.avatar);
    setMyID(profileInfo);
    addCards(cards);
  })
  .catch((err) => {
    `Ошибка: ${err}`;
  });
