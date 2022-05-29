import { openPopup, closePopup } from "./utils.js";
import { toggleButtonState } from "./validate.js";
import { addCard } from "./utils.js";

export const container = document.querySelector(".page");
const profile = container.querySelector(".profile");
export const profilePopup = container.querySelector(".profile-popup");
export const cardPopup = container.querySelector(".card-popup");
export const imagePopup = container.querySelector(".image-popup");

export const formAddCard = cardPopup.querySelector(".popup__form");

const picImgPopup = imagePopup.querySelector(".popup__image");
export const formProfileEdit = profilePopup.querySelector(".popup__form");
const nameInput = formProfileEdit.querySelector("input[name=profile-title]");
const jobInput = formProfileEdit.querySelector(
  "input[name=profile-description]"
);
export const profileEditBtn = profile.querySelector(".profile__edit-button");
export const profileAddBtn = profile.querySelector(".profile__add-button");
const profileTitle = profile.querySelector(".profile__title");
const profileSubtitle = profile.querySelector(".profile__subtitle");
export const profileCloseBtn = profilePopup.querySelector(".popup__cross");
export const cardCloseBtn = cardPopup.querySelector(".popup__cross");
export const imageCloseBtn = imagePopup.querySelector(".popup__cross");
const cardCaption = cardPopup.querySelector("input[name = card-title]");
const cardImage = cardPopup.querySelector("input[name = img-source]");
const imageCaption = imagePopup.querySelector(".popup__caption");

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}
export function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCard(cardCaption.value, cardImage.value);

  const inputList = Array.from(formAddCard.querySelectorAll(".popup__text"));
  const buttonElement = formAddCard.querySelector(".popup__button");

  formAddCard.reset();

  toggleButtonState(inputList, buttonElement, {
    inactiveButtonClass: "popup__button_inactive",
  });
  closePopup(cardPopup);
}
export function openImagePopup(caption, link) {
  picImgPopup.src = link;
  picImgPopup.alt = caption;
  imageCaption.textContent = caption;
  openPopup(imagePopup);
}
