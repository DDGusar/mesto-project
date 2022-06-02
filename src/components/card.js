import { openImagePopup, cardDeletePopup } from "./modal.js";
import { addCard, openPopup } from "./utils.js";
import { myProfile } from "./userInfo.js";
import { putLike, deleteLike } from "./api.js";
export const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;
export let deleteCardObj = {};

function toggleLike(heart, counter, id) {
  if (heart.classList.contains("card__heart_active")) {
    deleteLike(heart, counter, id)
      .then((res) => {
        removeLike(heart);
        countLikes(counter, res.likes.length);
      })
      .catch((err) => {
        `Ошибка: ${err}`;
      });
  } else {
    putLike(heart, counter, id)
      .then((res) => {
        addLike(heart);
        countLikes(counter, res.likes.length);
      })
      .catch((err) => {
        `Ошибка: ${err}`;
      });
  }
}
export function countLikes(elem, quantity) {
  elem.textContent = quantity;
}
export function addLike(elem) {
  elem.classList.add("card__heart_active");
}
export function removeLike(elem) {
  elem.classList.remove("card__heart_active");
}
function removeCard(cardElement, id) {
  deleteCardObj.element = cardElement;
  deleteCardObj.id = id;
  openPopup(cardDeletePopup);
}
export function createCard(cardObject) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardObject.name;
  const cardPic = cardElement.querySelector(".card__image");
  cardPic.src = cardObject.link;
  cardPic.alt = cardObject.name;
  cardPic.addEventListener("click", function (evt) {
    openImagePopup(cardObject.name, cardObject.link);
  });
  //для лайка
  const counter = cardElement.querySelector(".card__like-counter");
  const heart = cardElement.querySelector(".card__heart");
  countLikes(counter, cardObject.likes.length);
  cardObject.likes.forEach((like) => {
    if (like._id === myProfile._id) {
      addLike(heart);
      return;
    }
  });
  heart.addEventListener("click", function () {
    toggleLike(heart, counter, cardObject._id);
  });

  //для удаления карточки
  if (!(myProfile._id === cardObject.owner._id)) {
    cardElement.querySelector(".card__trash").remove();
  } else {
    cardElement
      .querySelector(".card__trash")
      .addEventListener("click", function () {
        removeCard(cardElement, cardObject._id);
      });
  }

  return cardElement;
}

export function addCards(cards) {
  cards.reverse();
  cards.forEach((element) => {
    addCard(element);
  });
}
