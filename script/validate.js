<<<<<<< HEAD
// const dataPopupForm = {
//   formSelector: '.pop-up__form',
//   inputSelector: '.pop-up__text',
//   submitButtonSelector: '.pop-up__btn-save',
//   inactiveButtonClass: 'pop-up__btn-save_disabled',
//   inputErrorClass: 'pop-up__text_error',
//   errorClass: 'pop-up__span-error_active',
// }
=======
// // const dataPopupForm = {
// //   formSelector: '.pop-up__form',
// //   inputSelector: '.pop-up__text',
// //   submitButtonSelector: '.pop-up__btn-save',
// //   inactiveButtonClass: '.pop-up__btn-save_disabled',
// //   inputErrorClass: '.pop-up__text_error',
// //   errorClass: '.pop-up__span-error_active',
// // }
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622

// // const {formSelector, ...rest} = dataPopupForm;

// const allInputsEmpty = (inputList) => !inputList.some(inputElement => inputElement.value.length > 0);

// const hasInvalidInput = (inputList) => inputList.some(inputElement => !inputElement.validity.valid);


// const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {

//   if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
//     buttonElement.classList.add(inactiveButtonClass);
//     buttonElement.setAttribute('disabled', true);
//   } else {
//     buttonElement.classList.remove(inactiveButtonClass);
//     buttonElement.removeAttribute('disabled');
//   }
// }


// // Ф-ция добавляет ошибку input
// const showInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {

//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
<<<<<<< HEAD
//   inputElement.classList.add('pop-up__text_error');
=======
//   inputElement.classList.add(inputErrorClass);
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622
//   errorElement.textContent = inputElement.validationMessage;
//   errorElement.classList.add(errorClass);
// };
// // Ф-ция крывает ошибку input
// const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
//   const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
//   inputElement.classList.remove(inputErrorClass);
//   errorElement.classList.remove(errorClass);
// };


// // Ф-ция проверяет валидность input-ов
// const checkInput = (form, inputElement, {...rest}) => {
//   if (inputElement.validity.valid) {
//     hideInputError(form, inputElement, rest);
//   } else {
//     showInputError(form, inputElement, rest);
//   }
// }


// // Вешаем слушителей на input
// const setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
//   const inputList = Array.from(formElement.querySelectorAll(inputSelector));

//   const buttonElement = formElement.querySelector(submitButtonSelector);

//   inputList.forEach(inputElement => {
//     inputElement.addEventListener('input', () => {
//       // проверить валидное состояние input-ов
//       checkInput(formElement, inputElement, rest);
//       // переключить состояние кнопки
//       toggleButtonState(inputList, buttonElement, rest);
//     })
//     toggleButtonState(inputList, buttonElement, rest);
//   })
// }


// // Находим формы
// const enableValidation = ({formSelector, ...rest}) => {
//   const formList = Array.from(document.querySelectorAll(formSelector));

//   formList.forEach(formElement => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     // Навесить слушатели для полей формы
//     setInputListeners(formElement, rest);

//   })
// }


<<<<<<< HEAD
// enableValidation();
=======
// enableValidation({
//   formSelector: '.pop-up__form',
//   inputSelector: '.pop-up__text',
//   submitButtonSelector: '.pop-up__btn-save',
//   inactiveButtonClass: '.pop-up__btn-save_disabled',
//   inputErrorClass: '.pop-up__text_error',
//   errorClass: '.pop-up__span-error_active',
// });




>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622


const allInputsEmpty = (inputList) => !inputList.some(inputElement => inputElement.value.length > 0);

const hasInvalidInput = (inputList) => inputList.some(inputElement => !inputElement.validity.valid);


<<<<<<< HEAD
const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {

  if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
=======
const toggleButtonState = (inputList, buttonElement) => {

  if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
    buttonElement.classList.add('pop-up__btn-save_disabled');
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove('pop-up__btn-save_disabled');
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622
    buttonElement.removeAttribute('disabled');
  }
}


// Ф-ция добавляет ошибку input
<<<<<<< HEAD
const showInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(errorClass);
};
// Ф-ция крывает ошибку input
const hideInputError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(inputErrorClass);
  errorElement.classList.remove(errorClass);
=======
const showInputError = (formElement, inputElement) => {

  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add('pop-up__text_error');
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add('pop-up__span-error_active');
};
// Ф-ция крывает ошибку input
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove('pop-up__text_error');
  errorElement.classList.remove('pop-up__span-error_active');
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622
};


// Ф-ция проверяет валидность input-ов
<<<<<<< HEAD
const checkInput = (form, inputElement, {...rest}) => {
  if (inputElement.validity.valid) {
    hideInputError(form, inputElement, rest);
  } else {
    showInputError(form, inputElement, rest);
=======
const checkInput = (form, inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError(form, inputElement);
  } else {
    showInputError(form, inputElement);
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622
  }
}


// Вешаем слушителей на input
<<<<<<< HEAD
const setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);
=======
const setInputListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.pop-up__text'));

  const buttonElement = formElement.querySelector('.pop-up__btn-save');
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622

  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      // проверить валидное состояние input-ов
<<<<<<< HEAD
      checkInput(formElement, inputElement, rest);
      // переключить состояние кнопки
      toggleButtonState(inputList, buttonElement, rest);
    })
    toggleButtonState(inputList, buttonElement, rest);
=======
      checkInput(formElement, inputElement);
      // переключить состояние кнопки
      toggleButtonState(inputList, buttonElement);
    })
    toggleButtonState(inputList, buttonElement);
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622
  })
}



// Находим формы
<<<<<<< HEAD
const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
=======
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.pop-up__form'));
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Навесить слушатели для полей формы
<<<<<<< HEAD
    setInputListeners(formElement, rest);
=======
    setInputListeners(formElement);
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622

  })
}


<<<<<<< HEAD
enableValidation({
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__text',
  submitButtonSelector: '.pop-up__btn-save',
  inactiveButtonClass: 'pop-up__btn-save_disabled',
  inputErrorClass: 'pop-up__text_error',
  errorClass: 'pop-up__span-error_active',
});

=======
enableValidation();
>>>>>>> 4e142be35fcc48011f30eb390fa2661687b5d622
