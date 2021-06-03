import './index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import {editBtn, allPopUp, cardSelector, editForm, addBtn, btnPopupSunmit, popUpFormSupplement, sectionCards, editAvatarForm, userAvatar, setting, userName, userJob, nameInput, jobInput} from '../utils/constants.js';
import Api from '../components/Api.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js'


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

  // попап удаления карточки
  const popupCardDelete = new PopupWithConfirm(allPopUp.popUpDeleteFoto);
  popupCardDelete.setEventListeners();


// событие после которого удаляем карточку
// const submitHandlerWithDeleteFoto = (cardId, card) => {
// // здесь будет изменять кнопка на сохраниие
// const handleCardDelete = () => {
//   console.log(card);
//    popupCardDelete.setNewLoadingText();
//   api.deleteCard(cardId)
//   .then(() => {
//     popupCardDelete.close();
//     popupCardDelete.defaultTextBtn();
//   })
//   .catch(err => console.log(err));
//  }
//   popupCardDelete.setNewSubmitHandler(handleCardDelete);
//   popupCardDelete.open();
// }
const submitHandlerWithDeleteFoto = () => {
  popupCardDelete.open();
  // popupCardDelete.setNewSubmitHandler(handleCardDelete);
}


  const cardImageClickHandler = (link, name) => {
    popupWithImage.open(link, name);
  }

  // const handleCardDelete = (card) => {
  //   popupCardDelete.open();
  // }

   // создаём карточку
 const generateCard = (item) => {

//  const handleCardLike = (shouldILike) => { // true
//    if(shouldILike)
//      api.incrementLike(item._id)
//    else
//      api.decrementLike(item._id)
//  }

 const card = new Card(item, userId,{
   handleCardDelete : () => {
    submitHandlerWithDeleteFoto();
    popupCardDelete.setNewLoadingText();
    api.deleteCard(card.getId())
    .then(() => {
      card.removeCard();
      popupCardDelete.close();
      popupCardDelete.defaultTextBtn();
    })
    .catch(err => console.log(err));
   }},
   cardSelector,
   cardImageClickHandler,
   {handleCardLike: (shouldILike) => {
    if(shouldILike)
      api.incrementLike(item._id)
      .then(res => {
        card.like()
      })
      .catch(err => console.log(err))
    else
      api.decrementLike(item._id)
      .then(res => {
        // console.log(res);
        card.like();
      })
      .catch(err => console.log(err))
   }});

 return card.generateCard();
}


// отрисовываем все карточки которые приходят
const cardList = new Section({
  renderer: (item) => cardList.addItem(generateCard(item))
}, sectionCards);

let userId;

api.getFullInfo()
.then(([cardsData, userData]) => {
  userId = userData._id;
  cardList.renderItems(cardsData);

  user.setUserInfo(userData);

  addBtn.addEventListener('click', () => {
    addCardValidator.disableSubmitButton();
    popupAddNewCard.open();
  });

})
.catch(err => console.log(err))


const user = new UserInfo(userName, userJob, userAvatar);


// создаём новую карточку и добавляем её сразу на страницу
const submitHandlerWithNewCard = (data) => {
// здесь будет изменять кнопка на сохраниие
  popupAddNewCard.setNewLoadingText();
  api.newCard(data)
  .then(res => {
    cardList.addItem(generateCard(res))
    popupAddNewCard.close();
    popupAddNewCard.defaultTextBtn();
  })
  .catch(err => console.log(err))
}

// попап добавления карточки
const popupAddNewCard = new PopupWithForm(allPopUp.popUpSupplement, submitHandlerWithNewCard);
popupAddNewCard.setEventListeners();



  // открываем попап и выводим информацию о пользователе
  const editPopUp = () => {
    const data = user.getUserInfo();
    nameInput.value = data.nameUser
    jobInput.value = data.jobUser
    popupEdit.open();
  }

  editBtn.addEventListener('click', editPopUp);


  // получаем данные о пользователе и меняем их на странице
  const submitHandlerWithEditForm = (data) => {
    // здесь будет изменять кнопка на сохраниие
    popupEdit.setNewLoadingText()
    api.userEdit(data)
    .then(res => {
      user.setUserInfo(res);
      popupEdit.defaultTextBtn();
    })
    .catch(err => console.log(err))

    popupEdit.close();
  }

  userAvatar.addEventListener('click', () => {
    avatarProfileValidator.disableSubmitButton();
    popupAvatar.open();
  })



  const submitHandlerNewAvatar = (data) => {
    // здесь будет изменять кнопка на сохраниие
    popupAvatar.setNewLoadingText();
    api.upgradeAvatar(data)
    .then(res => {
      userAvatar.src = `${data['contentFotoAvatar']}`;
      popupAvatar.close();
      popupAvatar.defaultTextBtn();
      // editAvatarForm.querySelector('.pop-up__btn-save').textContent = btnText;
    })
    .catch(err => console.log(err))
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
