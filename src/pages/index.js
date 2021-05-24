import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {editBtn, allPopUp, cardSelector, editForm, addBtn, popUpFormSupplement, avatarFoto, sectionCards, initialCards, userAvatar, setting, userName, userJob, nameInput, jobInput} from '../utils/constants.js';
import Api from '../components/Api';


const avatar = new URL('../images/avatar.jpg', import.meta.url);
const btnDelete = new URL('../images/btnDelete.svg', import.meta.url);
const closeIcon = new URL('../images/CloseIcon.svg', import.meta.url);
const closeIconDes = new URL('../images/CloseIconDes.svg', import.meta.url);
const foto_2 = new URL('../images/foto_2.jpg', import.meta.url);
const foto_3 = new URL('../images/foto_3.jpg', import.meta.url);
const heart_active = new URL('../images/heart_active.svg', import.meta.url);
const heart = new URL('../images/heart.svg', import.meta.url);
const logo = new URL('../images/logo.svg', import.meta.url);
const plus = new URL('../images/plus.svg', import.meta.url);
const vector = new URL('../images/Vector.svg', import.meta.url);



const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: 'af9c4ef2-e2ab-4c32-9f5d-4c36de022449',
    'Content-Type': 'application/json'
  }
})




const popupWithImage = new PopupWithImage(allPopUp.openPopupFoto);
popupWithImage.setEventListeners();


  const cardImageClickHandler = (link, name) => {
    popupWithImage.open(link, name);
  }



// отрисовываем карточки
const generateCard = (item) => {
  const card = new Card({
    item,
    cardSelector,
    handleCardDelete:() => {
      popupCardDelete.open();
      api.deleteCard(card.getId())
      .then(() => card.removeCard())
      .catch(err => Promise.reject(`Ошибка ${err.status}`));
    }}, cardImageClickHandler);
  return card.generateCard();
}


// отрисовываем все карточки приходящие из массива
  // const cardList = new Section({
  //   item: initialCards,
  //   renderer: (item) => cardList.addItem(generateCard(item))
  // }, sectionCards);

  // cardList.renderItems();

api.getInitialCards()
.then(res => {
  const cardList = new Section({
    item: res,
    renderer: (item) => cardList.addItem(generateCard(item))
  }, sectionCards);

  cardList.renderItems();
})
.catch(err => Promise.reject(`Ошибка ${err.status}`))


  // открываем попап и выводим информацию о пользователе
  const editPopUp = () => {
    const data = user.getUserInfo();
    nameInput.value = data.nameUser
    jobInput.value = data.jobUser
    popupEdit.open();
  }



// создаём новую карточку и добавляем её сразу на страницу
  const submitHandlerWithNewCard = (data) => {
    // const cardElement = generateCard({name: data['content-name-foto'], link: data['content-foto'], alt: 'Картинка'});
    // cardList.addItem(cardElement);
    api.newCard(data);


    popupAddNewCard.close();
  }




  editBtn.addEventListener('click', editPopUp);

  addBtn.addEventListener('click', () => {
    addCardValidator.disableSubmitButton();
    popupAddNewCard.open();
  });

  const user = new UserInfo(userName, userJob, userAvatar);


  api.getUserData()
  .then(res => {
  user.setUserInfo(res);
  })
  .catch(err => Promise.reject(`Ошибка ${err.status}`))


  // получаем данные о пользователе и меняем их на странице
  const submitHandlerWithEditForm = (data) => {
    // user.setUserInfo(data);
    api.userEdit(data);

    popupEdit.close();
  }

  avatarFoto.addEventListener('click', () => {
    popupAvatar.open();
  })

  const submitHandlerWithDeleteFoto = (data) => {


  }

  const submitHandlerNewAvatar = (data) => {
    api.upgradeAvatar(data)
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`));
    // avatarFoto.src = `${data[contentFotoAvatar]}`

  }



  // попап аватара
  const popupAvatar = new PopupWithForm(allPopUp.popUpAvatar, submitHandlerNewAvatar);
  popupAvatar.setEventListeners();

  // попап редоктирования
  const popupEdit = new PopupWithForm(allPopUp.profilePopup, submitHandlerWithEditForm);
  popupEdit.setEventListeners();

  // попап добавления карточки
  const popupAddNewCard = new PopupWithForm(allPopUp.popUpSupplement, submitHandlerWithNewCard);
  popupAddNewCard.setEventListeners();

  // попап удаления карточки
  const popupCardDelete = new PopupWithForm(allPopUp.popUpDeleteFoto, submitHandlerWithDeleteFoto);
  popupCardDelete.setEventListeners();




const addCardValidator = new FormValidator(setting, popUpFormSupplement);
const editProfileValidator = new FormValidator(setting, editForm);


addCardValidator.enableValidation();
editProfileValidator.enableValidation();
