
const container = document.querySelector('.page');
const popups = container.querySelectorAll('.popup');
const popupCloseBtns = container.querySelectorAll('.popup__cross');
const profile = container.querySelector('.profile');
const profileEditBtn = profile.querySelector('.profile__edit-button');
const profileAddBtn = profile.querySelector('.profile__add-button');


//open and close forms
function openForm() {
    popups[0].classList.add('popup_opened');
}
function closeForm(){
    popups[0].classList.remove('popup_opened');
    popups[1].classList.remove('popup_opened');
    popups[2].classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', openForm);

profileAddBtn.addEventListener('click', function() {
    popups[1].classList.add('popup_opened');
});
popupCloseBtns[0].addEventListener('click', closeForm);
popupCloseBtns[1].addEventListener('click', closeForm);
popupCloseBtns[2].addEventListener('click', closeForm);

// profile label corrections

const formElement = popups[0].querySelector('.popup__form');
const inputs = formElement.querySelectorAll('.popup__text');
const nameInput = inputs[0];
const jobInput = inputs[1];

function submitFormHandler (evt) {
  evt.preventDefault(); 
  let profileTitle = container.querySelector('.profile__title');
  profileTitle.textContent = nameInput.value;
  let profileSubtitle = container.querySelector('.profile__subtitle');
  profileSubtitle.textContent = jobInput.value;
  popups[0].classList.remove('popup_opened');
}

formElement.addEventListener('submit', submitFormHandler);

// открытие попапа с изображением
function openImagePopup(caption,link) {
    popups[2].classList.add('popup_opened');
    popups[2].querySelector('.popup__image').src = link;
    popups[2].querySelector('.popup__image').alt = caption;
    popups[2].querySelector('.popup__caption').textContent = caption;
}

//соединение формы создания и кнопки
const formCard = popups[1].querySelector('.popup__form');
// cards
const cardContainer = container.querySelector('.cards');

function addCard(cardCaptionValue, cardImageSrc) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  cardElement.querySelector('.card__title').textContent = cardCaptionValue;
  cardElement.querySelector('.card__image').src = cardImageSrc;
  cardElement.querySelector('.card__image').addEventListener('click',function(evt){
    openImagePopup(evt.target.alt,evt.target.src);
})
  cardElement.querySelector('.card__image').alt = cardCaptionValue;
  cardElement.querySelector('.card__heart').addEventListener('click',function(evt){
    evt.target.classList.toggle('card__heart_active');
  })
  cardElement.querySelector('.card__trash').addEventListener('click', function(evt) {
    evt.target.parentElement.remove();
  })
  cardContainer.prepend(cardElement);

}
function submitCardForm (evt) {
  evt.preventDefault(); 
  const cardInputs = formCard.querySelectorAll('.popup__text');
  const cardCaption = cardInputs[0].value;
  const cardImage = cardInputs[1].value;
  addCard(cardCaption,cardImage);
 cardInputs[0].value = '';
  cardInputs[1].value = '';
  closeForm();
}
formCard.addEventListener('submit',submitCardForm );



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

initialCards.forEach(function(item){
    addCard(item.name,item.link);
});
