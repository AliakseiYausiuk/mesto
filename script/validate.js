const dataPopupForm = {
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__text',
  submitButtonSelector: '.pop-up__btn-save',
  inactiveButtonClass: '.pop-up__btn-save_disabled',
  inputErrorClass: '.pop-up__text_error',
  errorClass: '.pop-up__span-error_active',
}

const allInputsEmpty = (inputList) => !inputList.some(inputElement => inputElement.value.length > 0);

const hasInvalidInput = (inputList) => inputList.some(inputElement => !inputElement.validity.valid);


const toggleButtonState = (inputList, buttonElement, data) => {

  if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
    buttonElement.classList.add(data.inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(data.inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
}


// Ф-ция добавляет ошибку input
const showInputError = (formElement, inputElement, data) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(data.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(data.errorClass);
};
// Ф-ция крывает ошибку input
const hideInputError = (formElement, inputElement, data) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(data.inputErrorClass);
  errorElement.classList.remove(data.errorClass);
};


// Ф-ция проверяет валидность input-ов
const checkInput = (form, inputElement, data) => {
  if (inputElement.validity.valid) {
    hideInputError(form, inputElement, data);
  } else {
    showInputError(form, inputElement, data);
  }
}


// Вешаем слушителей на input
const setInputListeners = (formElement, data) => {
  const inputList = Array.from(formElement.querySelectorAll(data.inputSelector));

  const buttonElement = formElement.querySelector(data.submitButtonSelector);

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      // проверить валидное состояние input-ов
      checkInput(formElement, inputElement, data);
      // переключить состояние кнопки
      toggleButtonState(inputList, buttonElement, data);
    })
    toggleButtonState(inputList, buttonElement, data);
  })
}


// Находим формы
const enableValidation = (data) => {
  const formList = Array.from(document.querySelectorAll(data.formSelector));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Навесить слушатели для полей формы
    setInputListeners(formElement, data);

  })
}


enableValidation(dataPopupForm);






// const allInputsEmpty = (inputList) => !inputList.some(inputElement => inputElement.value.length > 0);

// const hasInvalidInput = (inputList) => inputList.some(inputElement => !inputElement.validity.valid);


// const toggleButtonState = (inputList, buttonElement) => {

//   if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
//     buttonElement.classList.add('pop-up__btn-save_disabled');
//     buttonElement.setAttribute('disabled', true);
//   } else {
//     buttonElement.classList.remove('pop-up__btn-save_disabled');
//     buttonElement.removeAttribute('disabled');
//   }
// }


// // Ф-ция добавляет ошибку input
// const showInputError = (formElement, inputElement) => {

//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   console.log(inputElement);
//   console.log(errorElement);
//   inputElement.classList.add('pop-up__text_error');
//   errorElement.textContent = inputElement.validationMessage;
//   errorElement.classList.add('pop-up__span-error_active');
// };
// // Ф-ция крывает ошибку input
// const hideInputError = (formElement, inputElement) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove('pop-up__text_error');
//   errorElement.classList.remove('pop-up__span-error_active');
// };


// // Ф-ция проверяет валидность input-ов
// const checkInput = (form, inputElement) => {
//   if (inputElement.validity.valid) {
//     hideInputError(form, inputElement);
//   } else {
//     showInputError(form, inputElement);
//   }
// }


// // Вешаем слушителей на input
// const setInputListeners = (formElement) => {
//   const inputList = Array.from(formElement.querySelectorAll('.pop-up__text'));

//   const buttonElement = formElement.querySelector('.pop-up__btn-save');

//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', () => {
//       // проверить валидное состояние input-ов
//       checkInput(formElement, inputElement);
//       // переключить состояние кнопки
//       toggleButtonState(inputList, buttonElement);
//     })
//     toggleButtonState(inputList, buttonElement);
//   })
// }



// // Находим формы
// const enableValidation = () => {
//   const formList = Array.from(document.querySelectorAll('.pop-up__form'));

//   formList.forEach(formElement => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     // Навесить слушатели для полей формы
//     setInputListeners(formElement);

//   })
// }


// enableValidation();
