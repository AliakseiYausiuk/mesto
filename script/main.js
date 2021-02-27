let editBtn = document.querySelector('.profile__edit-button');
let popUp = document.querySelector('.pop-up');
let popUpActive = document.querySelector('.pop-up_active');
let popUpClose = document.querySelector('.pop-up__btn-close');

// находим имя и работу user
let userName = document.querySelector('.profile__info');
let userJob = document.querySelector('.profile__text');

let openPopUp = () => {
  nameInput.value = userName.textContent;
  jobInput.value = userJob.textContent;
  popUp.classList.add('pop-up_active');
}

let closePopUp = () => {
  popUp.classList.remove('pop-up_active');
}


popUpClose.addEventListener('click', closePopUp);
editBtn.addEventListener('click', openPopUp);


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
