import Popup from '../components/Popup.js';
import {overlays} from '../utils/constants.js';

// ф-ция открытия попапа
export const openPopUp = (popup) => {
  const openPopup = new Popup(popup);
  openPopup.open();
  openPopup.setEventListeners();
}


// ф-ция закрытия попапа
export const closePopUp = (popupClose) => {
  const closePopup = new Popup(popupClose);
  closePopup.close();
  closePopup.setEventListeners();
}

// Закрытие попапа кликом на оверлей
export const closePopUpOverlay = () => {
  overlays.forEach(popup => {
    popup.addEventListener('click', (evt) => {
      closePopUp(document.querySelector('.pop-up_active'));
    })
  })
}

export const popUpStopPropagation = () => {
  const allPopUpContainers = Array.from(document.querySelectorAll('.pop-up__container'));
  const popUpIdFoto = document.querySelector('.pop-up__foto-container');
  allPopUpContainers.push(popUpIdFoto);
  allPopUpContainers.forEach(el => el.addEventListener('click', (evt) => evt.stopPropagation()));
}
