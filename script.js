
let container = document.querySelector('.page');

let popup = container.querySelector('.popup');
let popupCloseBtn = popup.querySelector('.popup__cross');
console.log(container);
console.log(popup);
console.log(popupCloseBtn);




let profile = container.querySelector('.profile');
let profileEditBtn = profile.querySelector('.profile__edit-button');

function openForm() {
    popup.classList.add('popup_opened');
}
function closeForm(){
    popup.classList.remove('popup_opened');
}

profileEditBtn.addEventListener('click', openForm);
popupCloseBtn.addEventListener('click', closeForm);