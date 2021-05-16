import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.open();
  }
  open(url, text) {
    this._popup.querySelector('.pop-up__img').src = url;
    this._popup.querySelector('.pop-up__text-img').textContent = text;
    super.open();
  }
}
