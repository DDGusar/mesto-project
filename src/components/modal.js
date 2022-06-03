import { openPopup, closePopup, addCard } from "./utils.js";
import { toggleButtonState } from "./validate.js";
import { renderLoading } from "./utils.js";
import { setUserInfo, setAvatar } from "./userInfo.js";
import { postCard, saveProfileInfo, saveAvatar, deleteCard } from "./api.js";
import { deleteCardObj } from "./card.js";

export const container = document.querySelector(".page");
export const popups = document.querySelectorAll(".popup");
const profile = container.querySelector(".profile");
export const profilePopup = container.querySelector(".profile-popup");
export const cardPopup = container.querySelector(".card-popup");
const imagePopup = container.querySelector(".image-popup");
export const avatarPopup = container.querySelector(".avatar-popup");
export const cardDeletePopup = container.querySelector(".delete-card-popup");

export const formAddCard = cardPopup.querySelector(".popup__form");
export const formDeleteCard = cardDeletePopup.querySelector(".popup__form");

const picImgPopup = imagePopup.querySelector(".popup__image");
export const formProfileEdit = profilePopup.querySelector(".popup__form");
export const nameInput = formProfileEdit.querySelector(
  "input[name=profile-title]"
);
export const jobInput = formProfileEdit.querySelector(
  "input[name=profile-description]"
);
export const profileEditBtn = profile.querySelector(".profile__edit-button");
export const profileAddBtn = profile.querySelector(".profile__add-button");
export const profileTitle = profile.querySelector(".profile__title");
export const profileSubtitle = profile.querySelector(".profile__subtitle");
export const profileAvatarEditBtn = profile.querySelector(
  ".profile__avatar-btn"
);
export const profileAvatar = profile.querySelector(".profile__avatar");
export const profileSubmitBtn = profilePopup.querySelector(".popup__button");
export const cardSubmitBtn = cardPopup.querySelector(".popup__button");
export const formAvatarEdit = avatarPopup.querySelector(".popup__form");
export const avatarSubmitBtn = avatarPopup.querySelector(".popup__button");
export const avatarInput = avatarPopup.querySelector(
  "input[name = avatar-source]"
);
const cardCaption = cardPopup.querySelector("input[name = card-title]");
const cardImage = cardPopup.querySelector("input[name = img-source]");
const imageCaption = imagePopup.querySelector(".popup__caption");

export function openProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileSubtitle.textContent;
}

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(profileSubmitBtn, profileSubmitBtn.textContent, true);
  saveProfileInfo(nameInput.value, jobInput.value)
    .then(() => {
      setUserInfo(nameInput.value, jobInput.value);
      closePopup(profilePopup);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    })
    .finally(() => {
      renderLoading(profileSubmitBtn, "Сохранить", false);
    });
}
export function handleCardFormSubmit(evt) {
  evt.preventDefault();
  const inputList = Array.from(formAddCard.querySelectorAll(".popup__text"));
  const buttonElement = formAddCard.querySelector(".popup__button");
  renderLoading(cardSubmitBtn, cardSubmitBtn.textContent, true);
  postCard(cardCaption.value, cardImage.value)
    .then((res) => {
      addCard(res);
    })
    .then(() => {
      formAddCard.reset();
    })
    .then(() => {
      toggleButtonState(inputList, buttonElement, {
        inactiveButtonClass: "popup__button_inactive",
      });
    })
    .then(() => {
      closePopup(cardPopup);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    })
    .finally(() => {
      renderLoading(cardSubmitBtn, "Создать", false);
    });
}
export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  renderLoading(avatarSubmitBtn, avatarSubmitBtn.textContent, true);
  saveAvatar(avatarInput.value)
    .then(() => {
      setAvatar(avatarInput.value);
      closePopup(avatarPopup);
      formAvatarEdit.reset();
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    })
    .finally(() => {
      renderLoading(avatarSubmitBtn, "Сохранить", false);
    });
}
export function handleDeleteCardFormSubmit(evt) {
  evt.preventDefault();
  deleteCard(deleteCardObj.id)
    .then(() => {
      deleteCardObj.element.remove();
      closePopup(cardDeletePopup);
    })
    .catch((err) => {
      `Ошибка: ${err}`;
    });
}
export function openImagePopup(caption, link) {
  picImgPopup.src = link;
  picImgPopup.alt = caption;
  imageCaption.textContent = caption;
  openPopup(imagePopup);
}
