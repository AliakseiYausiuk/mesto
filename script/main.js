let editButton = document.querySelector('.edit-button');
let popUp = document.querySelector('.pop-up');
let popUpClose = document.querySelector('.pop-up__close');
// let popUpActive = document.querySelector('.pop-up_active');

// Находим значения и прокидываем в попап

let profileInfo = document.querySelector('.profile__info');

let valueInfo = profileInfo.textContent;


let profileText = document.querySelector('.profile__text');

let valueText = profileText.textContent;

let popUpName = document.querySelector('.pop-up__name');
let popUpText = document.querySelector('.pop-up__text');

// Изменяем лайк

let cardsLike = document.querySelector('.cards__like');

const likeActive = () => {
  cardsLike.removeAttribute('src');
  cardsLike.setAttribute('src', './images/heart_active.svg');
}

cardsLike.addEventListener('click', likeActive);


// ф-ция закрытия попап

const closePopUp = () => {
  popUp.classList.remove('pop-up_active');
  popUp.classList.add('pop-up');

}

popUpClose.addEventListener('click', closePopUp);

// ф-ция окрытия попап

const openPopUp = () => {
  popUp.classList.toggle('pop-up_active');

  popUpName.setAttribute('value' , valueInfo);
  popUpText.setAttribute('value', valueText);

}

editButton.addEventListener('click', openPopUp);

// ф-ция сохранения данных

let popUpBtn = document.querySelector('.pop-up__button');

let val_1 = popUpName.value;
let val_2 = popUpText.value;


const saveValue = () => {

  profileInfo.textContent = val_1;
  profileText.textContent = val_2;
  closePopUp();
}

popUpBtn.addEventListener('click', saveValue);
