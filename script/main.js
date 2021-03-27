const editBtn = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('#profile-popup');
const popUpSupplement = document.querySelector('#pop-up-supplement-foto');
const popUpActive = document.querySelector('.pop-up_active');
const popUpClose = document.querySelector('.pop-up__btn-close');
const popUpCloseSupplement = document.querySelector('#pop-up-supplement-foto__btn-close');
const openPopupFoto =  document.querySelector('#pop-up-foto');

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

// ф-ция открытия попапа
const openPopUp = (popup) => {
  popup.classList.add('pop-up_active');
}

// ф-ция закрытия попапа
const closePopUp = (popupClose) => {
  popupClose.classList.remove('pop-up_active');
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

// находим заголовок формы и кнопку

const formTitle = document.querySelector('.pop-up__title');
const formBtnSave = document.querySelector('.pop-up__btn-save');


addBtn.addEventListener('click', () => openPopUp(allPopUp.two));

// данные по контенту
// нашлёл template
const contentTemplate = document.querySelector('#content').content,
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
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    }
  ];

  const createCardsDomNode = (item) => {
    const contentElement = contentTemplate.cloneNode(true);
    const nameCard = contentElement.querySelector('.cards__text');
    const pathImgCard = contentElement.querySelector('.cards__foto');

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


// нашли картинку которую надо передать в попап
const popUpFoto = document.querySelector('.pop-up__img');
// кнопка закрытия попапа с картинкой
const popUpFotoClose = document.querySelector('#pop-up-foto__btn-close').addEventListener('click', () => closePopUp(allPopUp.three));
// находим в попап текст с картинкой
const popUpImgText = document.querySelector('.pop-up__text-img');



const openPopUpFotos = (evt) => {
  openPopUp(allPopUp.three);
  popUpFoto.src = evt.target.src;
  popUpImgText.textContent = evt.target.closest('.cards__list').querySelector('.cards__text').textContent;
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

  const popUpFormSupplement = document.querySelector('#pop-up-supplement-foto__form');
  const inputValName = popUpFormSupplement.querySelector('#NameFoto');
  const inputValLink = popUpFormSupplement.querySelector('#linkFoto');

  const popUpFormSupplementHandler = (evt) => {
    evt.preventDefault();

    const newCard = createCardsDomNode({name: inputValName.value,link: inputValLink.value});
    addEventListeners(newCard);

    sectionCards.prepend(newCard);

    inputValName.value = '';
    inputValLink.value = '';
    closePopUp(allPopUp.two);
  }


  popUpFormSupplement.addEventListener('submit', popUpFormSupplementHandler);

  const overlay = Array.from(document.querySelectorAll('.pop-up'));

// Закрытие попапа кликом на оверлей

const closePopUpOverlay = () => {

  overlay.forEach(popup => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.closest('.pop-up').className = 'pop-up') {
        popup.classList.remove(popUpActive);
      }
    })
  })

}

const popUpStopPropagation = () => {
  // const a = overlay.map(el => el.children)
  const allPopUpContainer = Array.from(document.querySelectorAll('.pop-up__container'));

  allPopUpContainer.forEach(el => el.addEventListener('click', (evt) => evt.stopPropagation()));
}


// Закрытие на кнопку esc

const ClosePopUpEsc = () => {
  document.addEventListener('keyup', (evt) => {
    if (evt.key = 'esc') {
      closePopUp(allPopUp.three);
    }
  })

}


closePopUpOverlay();
ClosePopUpEsc();
popUpStopPropagation();

