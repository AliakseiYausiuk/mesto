let editBtn = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.pop-up');
let popUpSupplement = document.querySelector('.pop-up-supplement-foto');
let popUpActive = document.querySelector('.pop-up_active');
let popUpClose = document.querySelector('.pop-up__btn-close');
let popUpCloseSupplement = document.querySelector('.pop-up-supplement-foto__btn-close');
let createBtn = document.querySelector('.pop-up__btn-create');

// находим имя и работу user
let userName = document.querySelector('.profile__info');
let userJob = document.querySelector('.profile__text');

let editPopUp = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  openPopUp();
}

let openPopUp = () => popUp.classList.add('pop-up_active');

let openPopUpSupplement = () => popUpSupplement.classList.add('pop-up-supplement-foto_active');

let closePopUp = () => popUp.classList.remove('pop-up_active');

let closePopUpSupplement = () => popUpSupplement.classList.remove('pop-up-supplement-foto_active');


popUpClose.addEventListener('click', closePopUp);
popUpCloseSupplement.addEventListener('click', closePopUpSupplement);
editBtn.addEventListener('click', editPopUp);


// Находим форму в DOM
let formElement = document.querySelector('.pop-up__form');
// Находим поля формы в DOM
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault();

    // Получите значение полей jobInput и nameInput из свойства value


    // Выберите элементы, куда должны быть вставлены значения полей


    // Вставьте новые значения с помощью textContent
    userName.textContent = nameInput.value;
    userJob.textContent = jobInput.value;

    closePopUp();
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

// находим кнопку добавления
let addBtn = document.querySelector('.profile__add-Button');

// находим заголовок формы и кнопку

let formTitle = document.querySelector('.pop-up__title');
let formBtnSave = document.querySelector('.pop-up__btn-save');


addBtn.addEventListener('click', openPopUpSupplement);

// данные по контенту
// нашлёл template
let contentTemplate = document.querySelector('#content').content,
  sectionCards = document.querySelector('.cards'),
  initialCards = [
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

  const createCardsDomNode = (item) => {
    const contentElement = contentTemplate.cloneNode(true);
    let nameCard = contentElement.querySelector('.cards__text');
    let pathImgCard = contentElement.querySelector('.cards__foto');

    nameCard.textContent = item.name;
    pathImgCard.src = item.link;

    return contentElement;
  }

// Лайки карточек

const cardsLike = (evt) => {
  evt.target.classList.toggle('cards__like_active');
}

const cardsDelete = (evt) => {
  evt.target.closest('.cards__card').remove();
}

// закрытие попапа с картинкой

const closePopUpFoto = () => document.querySelector('.pop-up-foto').classList.remove('pop-up-foto_active');


const openPopUpFotos = (evt) => {
  document.querySelector('.pop-up-foto').classList.add('pop-up-foto_active');
  document.querySelector('.pop-up-foto__img').src = evt.target.src;
  document.querySelector('.pop-up-foto__btn-close').addEventListener('click', closePopUpFoto);
}



const addEventListeners = (item) => {
  // добавляем слушителей на лайки карточек
  item.querySelector('.cards__like').addEventListener('click', cardsLike)
  // добавляем слушителей на удаление картинки
  item.querySelector('.cards__btn-delete').addEventListener('click', cardsDelete);
  // добавляем слушителей на попап с картинкой
  item.querySelector('.cards__foto').addEventListener('click', openPopUpFotos);
}



  const renderCards = () => {
    const result = initialCards.map(function (item) {
      const newCards = createCardsDomNode(item);
      addEventListeners(newCards);
      return newCards;
    });

    sectionCards.append(...result);
  }

  renderCards();

  // добавление карточек

  let popUpFormSupplement = document.querySelector('.pop-up-supplement-foto__form');

  const popUpFormSupplementHandler = (evt) => {
    evt.preventDefault();

    let inputValName = popUpFormSupplement.querySelector('#NameFoto').value;
    let inputValLink = popUpFormSupplement.querySelector('#linkFoto').value;

    let newCard = createCardsDomNode({name: inputValName,link: inputValLink});
    addEventListeners(newCard);

    sectionCards.prepend(newCard);

    inputValName.value = '';
    inputValLink.value = '';
    closePopUpSupplement();
  }


  popUpFormSupplement.addEventListener('submit', popUpFormSupplementHandler);





