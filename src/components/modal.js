import { openPopup, closePopup } from "./utils.js";
import { toggleButtonState } from "./validate.js";
import { addCard } from "./utils.js";
import { setUserInfo, setAvatar } from "./userInfo.js";
import { postCard, saveProfileInfo, saveAvatar } from "./api.js";

export const container = document.querySelector(".page");
const profile = container.querySelector(".profile");
export const profilePopup = container.querySelector(".profile-popup");
export const cardPopup = container.querySelector(".card-popup");
export const imagePopup = container.querySelector(".image-popup");
export const avatarPopup = container.querySelector(".avatar-popup");

export const formAddCard = cardPopup.querySelector(".popup__form");

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
export const profileAvatar = profile.querySelector(".profile__avatar");
export const profileCloseBtn = profilePopup.querySelector(".popup__cross");
export const cardCloseBtn = cardPopup.querySelector(".popup__cross");
export const imageCloseBtn = imagePopup.querySelector(".popup__cross");
export const formAvatarEdit = avatarPopup.querySelector(".popup__form");
export const avatarCloseBtn = avatarPopup.querySelector(".popup__cross");
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
  setUserInfo(nameInput.value, jobInput.value);
  saveProfileInfo(nameInput.value, jobInput.value);
  closePopup(profilePopup);
}
export function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCard(cardCaption.value, cardImage.value);
  postCard(cardCaption.value, cardImage.value);

  const inputList = Array.from(formAddCard.querySelectorAll(".popup__text"));
  const buttonElement = formAddCard.querySelector(".popup__button");

  formAddCard.reset();

  toggleButtonState(inputList, buttonElement, {
    inactiveButtonClass: "popup__button_inactive",
  });
  closePopup(cardPopup);
}
export function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  setAvatar(avatarInput.value);
  saveAvatar(avatarInput.value);
  closePopup(avatarPopup);
}
export function openImagePopup(caption, link) {
  picImgPopup.src = link;
  picImgPopup.alt = caption;
  imageCaption.textContent = caption;
  openPopup(imagePopup);
}
