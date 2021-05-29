import Popup from '../components/Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector('.pop-up__img');
    this._popupImgText = this._popup.querySelector('.pop-up__text-img');
  }
  open(url, text) {
    this._popupImg.src = url;
    this._popupImg.alt = text;
    this._popupImgText.textContent = text;
    super.open();
  }
}
