

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
//   inputElement.classList.add(inputErrorClass);
//   errorElement.textContent = inputElement.validationMessage;
//   errorElement.classList.add(errorClass);
// };
// // Ф-ция cкрывает ошибку input
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
//   const inputLists = Array.from(formElement.querySelectorAll(inputSelector));

//   const buttonElement = formElement.querySelector(submitButtonSelector);


//   inputLists.forEach(inputElement => {
//     inputElement.addEventListener('input', () => {
//       // проверить валидное состояние input-ов

//       checkInput(formElement, inputElement, rest);
//       // переключить состояние кнопки
//       toggleButtonState(inputLists, buttonElement, rest);
//     })
//     toggleButtonState(inputLists, buttonElement, rest);

//   })
// }



// // Находим формы
// const enableValidation = ({formSelector, ...rest}) => {
//   const formLists = Array.from(document.querySelectorAll(formSelector));

//   formLists.forEach(formElement => {
//     formElement.addEventListener('submit', (evt) => {
//       evt.preventDefault();
//     });
//     // Навесить слушатели для полей формы
//     setInputListeners(formElement, rest);

//   })
// }



// enableValidation({
//   formSelector: '.pop-up__form',
//   inputSelector: '.pop-up__text',
//   submitButtonSelector: '.pop-up__btn-save',
//   inactiveButtonClass: 'pop-up__btn-save_disabled',
//   inputErrorClass: 'pop-up__text_error',
//   errorClass: 'pop-up__span-error_active',
// });


export class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
  }
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._data.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._data.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._data.inputErrorClass);
    errorElement.classList.remove(this._data.errorClass);
  }

  _checkInput(inputElement) {
    if (inputElement.validity.valid) {
          this._hideInputError(inputElement);
        } else {
          this._showInputError(inputElement);

        }
  }

  _allInputsEmpty(inputList) {
    return !inputList.some(inputElement => inputElement.value.length > 0);
  }

  _hasInvalidInput(inputList) {
    return inputList.some(inputElement => !inputElement.validity.valid);
  }

  _toggleButtonState(inputList, buttonElement) {
      if (this._hasInvalidInput(inputList) || this._allInputsEmpty(inputList)) {
        buttonElement.classList.add(this._data.inactiveButtonClass);
        buttonElement.setAttribute('disabled', true);
      } else {
        buttonElement.classList.remove(this._data.inactiveButtonClass);
        buttonElement.removeAttribute('disabled');

      }
  }

  _setEventListeners() {
    const inputLists = Array.from(this._form.querySelectorAll(this._data.inputSelector));

    const buttonElement = this._form.querySelector(this._data.submitButtonSelector);


    inputLists.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInput(inputElement);

        this._toggleButtonState(inputLists, buttonElement);
      })
    })

  }
  enableValidation() {
    this._form.addEventListener('submit', evt => evt.preventDefault());
    this._setEventListeners()
  }
}

export default FormValidator;


