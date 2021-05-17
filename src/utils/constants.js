export const editBtn = document.querySelector('.profile__edit-button');
export const profilePopup = document.querySelector('#profile-popup');
export const popUpSupplement = document.querySelector('#pop-up-supplement-foto');
export const popUpClose = document.querySelectorAll('.pop-up__btn-close');
export const openPopupFoto =  document.querySelector('#pop-up-foto');
export const cardSelector = '#content';
export const editForm = document.querySelector('#edit-form');
// находим кнопку добавления новой карточки
export const addBtn = document.querySelector('.profile__add-Button');
export const formElement = document.querySelector('.pop-up__form');
export const nameInput = formElement.querySelector('#nameInput');
export const jobInput = formElement.querySelector('#jobInput');
// находим имя и работу user
export const userName = document.querySelector('.profile__info');
export const userJob = document.querySelector('.profile__text');
export const popUpFormSupplement = document.querySelector('#pop-up-supplement-foto__form');

export const allPopUp = {
  profilePopup,
  popUpSupplement,
  openPopupFoto,
}

export const sectionCards = '.cards',
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

 export const setting = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__text',
    submitButtonSelector: '.pop-up__btn-save',
    inactiveButtonClass: 'pop-up__btn-save_disabled',
    inputErrorClass: 'pop-up__text_error',
    errorClass: 'pop-up__span-error_active',
  }
