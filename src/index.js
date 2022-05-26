import "../pages/index.css";
const container = document.querySelector(".page");
const profilePopup = container.querySelector(".profile-popup");
const cardPopup = container.querySelector(".card-popup");
const imagePopup = container.querySelector(".image-popup");
const profile = container.querySelector(".profile");
const profileEditBtn = profile.querySelector(".profile__edit-button");
const profileAddBtn = profile.querySelector(".profile__add-button");
const profileTitle = profile.querySelector(".profile__title");
const profileSubtitle = profile.querySelector(".profile__subtitle");
const profileCloseBtn = profilePopup.querySelector(".popup__cross");
const cardCloseBtn = cardPopup.querySelector(".popup__cross");
const imageCloseBtn = imagePopup.querySelector(".popup__cross");
const formElement = profilePopup.querySelector(".popup__form");
const nameInput = formElement.querySelector("input[name=profile-title]");
const jobInput = formElement.querySelector("input[name=profile-description]");

const formCard = cardPopup.querySelector(".popup__form");
const cardContainer = container.querySelector(".cards");
const cardTemplate = document.querySelector("#card-template").content;

const picImgPopup = imagePopup.querySelector(".popup__image");
const cardCaption = cardPopup.querySelector("input[name = card-title]");
const cardImage = cardPopup.querySelector("input[name = img-source]");
const popups = document.querySelectorAll(".popup");
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = jobInput.value;
  closePopup(profilePopup);
}
function openImagePopup(caption, link) {
  openPopup(imagePopup);
  picImgPopup.src = link;
  picImgPopup.alt = caption;
  imagePopup.querySelector(".popup__caption").textContent = caption;
}
function createCard(cardCaptionValue, cardImageSrc) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__title").textContent = cardCaptionValue;
  const cardPic = cardElement.querySelector(".card__image");
  cardPic.src = cardImageSrc;
  cardPic.alt = cardCaptionValue;
  cardPic.addEventListener("click", function (evt) {
    openImagePopup(evt.target.alt, evt.target.src);
  });

  cardElement
    .querySelector(".card__heart")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("card__heart_active");
    });
  cardElement
    .querySelector(".card__trash")
    .addEventListener("click", function (evt) {
      cardElement.remove();
    });
  return cardElement;
}

function addCard(cardCaptionValue, cardImageSrc) {
  const cardElement = createCard(cardCaptionValue, cardImageSrc);
  cardContainer.prepend(cardElement);
}

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  addCard(cardCaption.value, cardImage.value);
  formCard.reset();
  closePopup(cardPopup);
}

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
formElement.addEventListener("submit", handleProfileFormSubmit);
formCard.addEventListener("submit", handleCardFormSubmit);

initialCards.forEach(function (item) {
  addCard(item.name, item.link);
});
popups.forEach(function (item) {
  item.addEventListener("click", function (evt) {
    if (evt.target.classList.contains("popup")) {
      // console.log(evt.target);
      closePopup(evt.target);
    }
  });
});
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopup(evt.target.querySelector(".popup_opened"));
  }
});

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("popup__text_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("popup__text-error_active");
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("popup__text_type_error");
  errorElement.classList.remove("popup__text-error_active");
  errorElement.textContent = "верно";
};
// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  });
};
// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять

const toggleButtonState = (inputList, buttonElement) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonElement.classList.add("popup__button_inactive");
  } else {
    // иначе сделай кнопку активной
    buttonElement.classList.remove("popup__button_inactive");
  }
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__text"));
  const buttonElement = formElement.querySelector(".popup__button");
  toggleButtonState(inputList, buttonElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll(".popup__form"));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(
      formElement.querySelectorAll(".popup__form-set")
    );

    fieldsetList.forEach((fieldSet) => {
      setEventListeners(fieldSet);
    });
  });
};

enableValidation();
