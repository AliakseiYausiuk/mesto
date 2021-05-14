import Popup from '../components/Popup.js';
import {popupImg, popupImgText} from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.open();
  }
  open(url, text) {
    popupImg.src = url;
    popupImgText.textContent = text;
    super.open();
  }
}
