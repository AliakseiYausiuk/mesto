import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitHandler) {
    super(popupSelector)
    this._submitHandler = submitHandler;
  }

  _getInputValues() {
    const values = {};
    const inputs = [...this._form.querySelectorAll('.pop-up__text')];
    inputs.forEach(el => {
      values[el.name] = el.value;
    })
    return values;
  }


  setEventListeners() {
    super.setEventListeners();

    this._form = this._popup.querySelector('.pop-up__form');
    this._form.addEventListener('submit', () => {
      this._submitHandler(this._getInputValues());
    })

  }

  close() {
    // очищаю форму после закрытия формы
    this._form.reset();
    super.close();
  }
}
