import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {editBtn, allPopUp, cardSelector, editForm, addBtn, popUpFormSupplement, sectionCards, editAvatarForm, userAvatar, setting, userName, userJob, nameInput, jobInput} from '../utils/constants.js';
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

  const handleCardDelete = (card) => {
    // событие после которого удаляем карточку
    const submitHandlerWithDeleteFoto = () => {

      api.deleteCard(card.getId())
      .then(() => card.removeCard())
      .catch(err => console.log(err));

      popupCardDelete.close();
    }

    // попап удаления карточки
    const popupCardDelete = new PopupWithForm(allPopUp.popUpDeleteFoto, submitHandlerWithDeleteFoto);
    popupCardDelete.setEventListeners();


    popupCardDelete.open();
  }




  api.getFullInfo()
  .then(([cardsData, userData]) => {
    const userId = userData._id;



    user.setUserInfo(userData);

    // создаём карточку
    const generateCard = (item) => {

      const handleCardLike = (shouldILike) => { // true
        if(shouldILike)
          api.incrementLike(item._id)
        else
          api.decrementLike(item._id)
      }

      const card = new Card({...item, currentUserId: userId}, cardSelector, handleCardDelete, cardImageClickHandler, handleCardLike);
      return card.generateCard();
    }

    // отрисовываем все карточки которые приходят
    const cardList = new Section({
      item: cardsData,
      renderer: (item) => cardList.addItem(generateCard(item))
    }, sectionCards);

    // создаём новую карточку и добавляем её сразу на страницу
    const submitHandlerWithNewCard = (data) => {
      api.newCard(data)
      .then(res => cardList.addItem(generateCard(res)))
      .catch(err => console.log(err))

      popupAddNewCard.close();
    }

    // попап добавления карточки
    const popupAddNewCard = new PopupWithForm(allPopUp.popUpSupplement, submitHandlerWithNewCard);
    popupAddNewCard.setEventListeners();

    addBtn.addEventListener('click', () => {
      addCardValidator.disableSubmitButton();
      popupAddNewCard.open();
    });


    cardList.renderItems();
  })
  .catch(err => console.log(err))



  // открываем попап и выводим информацию о пользователе
  const editPopUp = () => {
    const data = user.getUserInfo();
    nameInput.value = data.nameUser
    jobInput.value = data.jobUser
    popupEdit.open();
  }

  editBtn.addEventListener('click', editPopUp);

  const user = new UserInfo(userName, userJob, userAvatar);


  // получаем данные о пользователе и меняем их на странице
  const submitHandlerWithEditForm = (data) => {
    api.userEdit(data)
    .then(res => {
      user.setUserInfo(res);
      console.log(res);
    })
    .catch(err => console.log(err))

    popupEdit.close();
  }

  userAvatar.addEventListener('click', () => {
    popupAvatar.open();
  })



  const submitHandlerNewAvatar = (data) => {

    api.upgradeAvatar(data)
    .catch(err => console.log(err))
    userAvatar.src = `${data[contentFotoAvatar]}`
    popupAvatar.close();
  }



  // попап аватара
  const popupAvatar = new PopupWithForm(allPopUp.popUpAvatar, submitHandlerNewAvatar);
  popupAvatar.setEventListeners();

  // попап редоктирования
  const popupEdit = new PopupWithForm(allPopUp.profilePopup, submitHandlerWithEditForm);
  popupEdit.setEventListeners();







const addCardValidator = new FormValidator(setting, popUpFormSupplement);
const editProfileValidator = new FormValidator(setting, editForm);
const avatarProfileValidator = new FormValidator(setting, editAvatarForm);


addCardValidator.enableValidation();
editProfileValidator.enableValidation();
avatarProfileValidator.enableValidation();
