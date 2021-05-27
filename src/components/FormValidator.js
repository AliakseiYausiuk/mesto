

export class FormValidator {
  constructor(data, form) {
    this._data = data;
    this._form = form;
    this._buttonElement = this._form.querySelector(this._data.submitButtonSelector);
  }
  disableSubmitButton() {
    this._buttonElement.classList.add(this._data.inactiveButtonClass);
    this._buttonElement.setAttribute('disabled', true);
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

  _toggleButtonState(inputList) {
      if (this._hasInvalidInput(inputList) || this._allInputsEmpty(inputList)) {
        this.disableSubmitButton();
      } else {
        this._buttonElement.classList.remove(this._data.inactiveButtonClass);
        this._buttonElement.removeAttribute('disabled');
        // console.log(this._data.submitButtonSelector);
        this._buttonElement.textContent = 'Сохранение...';
      }
  }

  _setEventListeners() {
     this._inputLists = Array.from(this._form.querySelectorAll(this._data.inputSelector));

    this._inputLists.forEach(inputElement => {
      inputElement.addEventListener('input', () => {
        this._checkInput(inputElement);

        this._toggleButtonState(this._inputLists);
      })
    })

  }
  enableValidation() {
    this._form.addEventListener('submit', evt => evt.preventDefault());
    this._setEventListeners()
  }
}

export default FormValidator;


