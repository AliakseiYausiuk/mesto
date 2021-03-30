

const allInputsEmpty = (inputList) => !inputList.some(inputElement => inputElement.value.length > 0);

const hasInvalidInput = (inputList) => inputList.some(inputElement => !inputElement.validity.valid);


const toggleButtonState = (inputList, buttonElement, {inactiveButtonClass}) => {

  if (hasInvalidInput(inputList) || allInputsEmpty(inputList)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');

  }
}


// Ф-ция добавляет ошибку input

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

};


// Ф-ция проверяет валидность input-ов

const checkInput = (form, inputElement, {...rest}) => {
  if (inputElement.validity.valid) {
    hideInputError(form, inputElement, rest);
  } else {
    showInputError(form, inputElement, rest);

  }
}


// Вешаем слушителей на input

const setInputListeners = (formElement, {inputSelector, submitButtonSelector, ...rest}) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));

  const buttonElement = formElement.querySelector(submitButtonSelector);


  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      // проверить валидное состояние input-ов

      checkInput(formElement, inputElement, rest);
      // переключить состояние кнопки
      toggleButtonState(inputList, buttonElement, rest);
    })
    toggleButtonState(inputList, buttonElement, rest);

  })
}



// Находим формы
const enableValidation = ({formSelector, ...rest}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));

  formList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    // Навесить слушатели для полей формы
    setInputListeners(formElement, rest);

  })
}



enableValidation({
  formSelector: '.pop-up__form',
  inputSelector: '.pop-up__text',
  submitButtonSelector: '.pop-up__btn-save',
  inactiveButtonClass: 'pop-up__btn-save_disabled',
  inputErrorClass: 'pop-up__text_error',
  errorClass: 'pop-up__span-error_active',
});


