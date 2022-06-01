import { openImagePopup } from "./modal.js";
import { addCard } from "./utils.js";
import { myProfile } from "./userInfo.js";
export const cardContainer = document.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;

function toggleLike(evt) {
  evt.target.classList.toggle("card__heart_active");
}
function removeCard(cardElement) {
  cardElement.remove();
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
  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", toggleLike);
  cardElement.querySelector(".card__like-counter").textContent =
    cardObject.likes.length;
  // "b93b7e9ac4f5ec5e13d36e94"
  // console.log(myProfile._id);
  // console.log(cardObject.owner._id);
  // console.log(cardElement.querySelector(".card__trash"));
  if (!(myProfile._id === cardObject.owner._id)) {
    cardElement.querySelector(".card__trash").remove();
  } else {
    cardElement
      .querySelector(".card__trash")
      .addEventListener("click", function () {
        removeCard(cardElement);
      });
  }

  return cardElement;
}

export function addCards(cards) {
  cards.forEach((element) => {
    addCard(element);
    // console.log(element.createdAt);
  });
}
