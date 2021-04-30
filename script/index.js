import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';

const editBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('#profile-popup');
const popUpSupplement = document.querySelector('#pop-up-supplement-foto');
const popUpActive = document.querySelector('.pop-up_active');
const popUpClose = document.querySelector('.pop-up__btn-close');
const popUpCloseSupplement = document.querySelector('#pop-up-supplement-foto__btn-close');
const openPopupFoto =  document.querySelector('#pop-up-foto');
export const popupImg = document.querySelector('.pop-up__img');
export const popupImgText = document.querySelector('.pop-up__text-img');

const allPopUp = {
  one: profilePopup,
  two: popUpSupplement,
  three: openPopupFoto,
}

// находим имя и работу user
const userName = document.querySelector('.profile__info');
const userJob = document.querySelector('.profile__text');

const editPopUp = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  openPopUp(allPopUp.one);
}

const handleEsc = (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    closePopUp(document.querySelector('.pop-up_active'));
  }
};

// ф-ция открытия попапа
export const openPopUp = (popup) => {
  popup.classList.add('pop-up_active');
  // Закрытие на кнопку esc
  document.addEventListener('keydown', handleEsc);
}


// ф-ция закрытия попапа
export const closePopUp = (popupClose) => {
  popupClose.classList.remove('pop-up_active');
  document.removeEventListener('keydown', handleEsc);
}


popUpClose.addEventListener('click', () => closePopUp(allPopUp.one));
popUpCloseSupplement.addEventListener('click', () => closePopUp(allPopUp.two));
editBtn.addEventListener('click', editPopUp);


// Находим форму в DOM
const formElement = document.querySelector('.pop-up__form');
// Находим поля формы в DOM
const nameInput = formElement.querySelector('#nameInput');
const jobInput = formElement.querySelector('#jobInput');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();
    // Получите значение полей jobInput и nameInput из свойства value


    // Выберите элементы, куда должны быть вставлены значения полей


    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    closePopUp(allPopUp.one);
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// находим кнопку добавления
const addBtn = document.querySelector('.profile__add-Button');


addBtn.addEventListener('click', () => openPopUp(allPopUp.two));

// данные по контенту
// нашлёл template
const sectionCards = document.querySelector('.cards'),
  initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Зелёные горы',
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
      alt: 'Лес зимой',
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Высокоэтажка',
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
      alt: 'Зелёные горы',
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
      alt: 'Железная дорога среди леса',
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
      alt: 'Высокоэтажка',
    }
  ];

  const setting = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__text',
    submitButtonSelector: '.pop-up__btn-save',
    inactiveButtonClass: 'pop-up__btn-save_disabled',
    inputErrorClass: 'pop-up__text_error',
    errorClass: 'pop-up__span-error_active',
  }

  const createCard = (item) => {
    const card = new Card(item);
    return card.generateCard();
  }


const renderCards = () => {
  initialCards.forEach(item => sectionCards.append(createCard(item)));
}


renderCards();


// // кнопка закрытия попапа с картинкой

const popUpFotoClose = document.querySelector('#pop-up-foto__btn-close');
popUpFotoClose.addEventListener('click', () => closePopUp(allPopUp.three));

//   // добавление карточек

  const popUpFormSupplement = document.querySelector('#pop-up-supplement-foto__form');
  const inputValName = popUpFormSupplement.querySelector('#NameFoto');
  const inputValLink = popUpFormSupplement.querySelector('#linkFoto');

  const popUpFormSupplementHandler = (evt) => {
    evt.preventDefault();

    const newCard = new Card({name: inputValName.value, link: inputValLink.value, alt: 'img'});
    const cardElement = newCard.generateCard();

    sectionCards.prepend(cardElement);

    const formFoto = document.querySelector('#pop-up-supplement-foto');
    // const buttonElement = formFoto.querySelector('.pop-up__btn-save');

    // buttonElement.setAttribute('disabled', true);
    // buttonElement.classList.add('pop-up__btn-save_disabled');
    // const addCardValidator = new FormValidator(setting, popUpFormSupplement);
    // addCardValidator.disableSubmitButton();

    inputValName.value = '';
    inputValLink.value = '';

    closePopUp(allPopUp.two);
  }


  popUpFormSupplement.addEventListener('submit', popUpFormSupplementHandler);

  const overlays = Array.from(document.querySelectorAll('.pop-up'));

// Закрытие попапа кликом на оверлей

const closePopUpOverlay = () => {
  overlays.forEach(popup => {
    popup.addEventListener('click', (evt) => {
      closePopUp(document.querySelector('.pop-up_active'));
    })
  })
}



const popUpStopPropagation = () => {
  const allPopUpContainers = Array.from(document.querySelectorAll('.pop-up__container'));
  const popUpIdFoto = document.querySelector('.pop-up__foto-container');
  allPopUpContainers.push(popUpIdFoto);
  allPopUpContainers.forEach(el => el.addEventListener('click', (evt) => evt.stopPropagation()));
}


closePopUpOverlay();
popUpStopPropagation();


const editForm = document.querySelector('#edit-form');

const addCardValidator = new FormValidator(setting, popUpFormSupplement);
const disableButton = new FormValidator(setting, popUpFormSupplement);
const editProfileValidator = new FormValidator(setting, editForm);


addCardValidator.enableValidation();
disableButton.disableSubmitButton();
editProfileValidator.enableValidation();
