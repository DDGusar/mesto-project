import { openPopup, closePopup } from "./utils.js";
import { toggleButtonState } from "./validate.js";
import { addCard } from "./utils.js";

export const container = document.querySelector(".page");
const profile = container.querySelector(".profile");
export const profilePopup = container.querySelector(".profile-popup");
export const cardPopup = container.querySelector(".card-popup");
export const imagePopup = container.querySelector(".image-popup");

export const formCard = cardPopup.querySelector(".popup__form");

const picImgPopup = imagePopup.querySelector(".popup__image");
export const formElement = profilePopup.querySelector(".popup__form");
const nameInput = formElement.querySelector("input[name=profile-title]");
const jobInput = formElement.querySelector("input[name=profile-description]");
export const profileEditBtn = profile.querySelector(".profile__edit-button");
export const profileAddBtn = profile.querySelector(".profile__add-button");
const profileTitle = profile.querySelector(".profile__title");
const profileSubtitle = profile.querySelector(".profile__subtitle");
export const profileCloseBtn = profilePopup.querySelector(".popup__cross");
export const cardCloseBtn = cardPopup.querySelector(".popup__cross");
export const imageCloseBtn = imagePopup.querySelector(".popup__cross");
export const popups = document.querySelectorAll(".popup");
const cardCaption = cardPopup.querySelector("input[name = card-title]");
const cardImage = cardPopup.querySelector("input[name = img-source]");

export function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}
export function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCard(cardCaption.value, cardImage.value);
  formCard.reset();
  //   toggleButtonState();

  closePopup(cardPopup);
}
export function openImagePopup(caption, link) {
  openPopup(imagePopup);
  picImgPopup.src = link;
  picImgPopup.alt = caption;
  imagePopup.querySelector(".popup__caption").textContent = caption;
}
