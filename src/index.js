import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {editBtn, profilePopup, popUpSupplement, openPopupFoto, cardSelector, editForm, addBtn, popUpFormSupplement, sectionCards, initialCards} from '../utils/constants.js';
import {closePopUpOverlay, popUpStopPropagation} from '../utils/utils.js';

const avatar = new URL('../images/avatar.jpg', import.meta.url);
const btnDelete = new URL('../images/btnDelete.svg', import.meta.url);
const closeIcon = new URL('../images/CloseIcon.svg', import.meta.url);
const closeIconDes = new URL('../images/CloseIconDes.svg', import.meta.url);
const foto_2 = new URL('../images/foto_2.jpg', import.meta.url);
const foto_3 = new URL('../images/foto_3.jpg', import.meta.url);
const foto_4 = new URL('../images/foto_4.jpg', import.meta.url);
const heart_active = new URL('../images/heart_active.svg', import.meta.url);
const heart = new URL('../images/heart.svg', import.meta.url);
const logo = new URL('../images/logo.svg', import.meta.url);
const plus = new URL('../images/plus.svg', import.meta.url);
const vector = new URL('../images/Vector.svg', import.meta.url);



const allPopUp = {
  one: profilePopup,
  two: popUpSupplement,
  three: openPopupFoto,
}



  const setting = {
    formSelector: '.pop-up__form',
    inputSelector: '.pop-up__text',
    submitButtonSelector: '.pop-up__btn-save',
    inactiveButtonClass: 'pop-up__btn-save_disabled',
    inputErrorClass: 'pop-up__text_error',
    errorClass: 'pop-up__span-error_active',
  }


  const cardImageClickHandler = (link, name) => {
    const popupWithImage = new PopupWithImage(allPopUp.three);
    popupWithImage.setEventListeners();
    popupWithImage.open(link, name);
  }





  const cardList = new Section({
    item: initialCards,
    renderer: (item) => {
      const card = new Card(item, cardSelector, cardImageClickHandler);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    },
  }, sectionCards);

  cardList.renderItems();



  const editPopUp = () => {
    popupEdit.open();
  }




  const submitHandlerWithNewCard = (data) => {
    const card = new Card({name: data['content-name-foto'], link: data['content-foto'], alt: 'Картинка'},cardSelector, cardImageClickHandler);
    const cardElement = card.generateCard();
    cardList.addItem(cardElement);

    popupAddNewCard.close();
  }




  editBtn.addEventListener('click', editPopUp);

  addBtn.addEventListener('click', () => {
    addCardValidator.disableSubmitButton();
    popupAddNewCard.open();
  });


  const submitHandlerWithEditForm = (data) => {
    const user = new UserInfo(data);
    user.getUserInfo();
    user.setUserInfo();
    popupEdit.close();
  }


  const popupEdit = new PopupWithForm(allPopUp.one, submitHandlerWithEditForm);
  popupEdit.setEventListeners();

  const popupAddNewCard = new PopupWithForm(allPopUp.two, submitHandlerWithNewCard);
  popupAddNewCard.setEventListeners();





closePopUpOverlay();
popUpStopPropagation();



const addCardValidator = new FormValidator(setting, popUpFormSupplement);
const editProfileValidator = new FormValidator(setting, editForm);


addCardValidator.enableValidation();
editProfileValidator.enableValidation();
