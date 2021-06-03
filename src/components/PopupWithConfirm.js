import Popup from './Popup.js';
// новый класс модалки с подтверждением
class PopupWithConfirm extends Popup {
  // это перетягиваем с PopupWithForm, только ничего не пробрасываем
  // в _submitHandler
  constructor(popupSelector) {
    super(popupSelector)
    this._popupBtn = this._popup.querySelector('.pop-up__btn-save').textContent;
  }
  setEventListeners() {
    super.setEventListeners();
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitHandler();
    });
  }
  // эта функция будет подменять функцию при сабмите при открытии модалки
  // там будет реф на актуальный id клискнутой карточки
  setNewSubmitHandler(newSubmitHandler) {
    this._submitHandler = newSubmitHandler;
  }

  // смена текста при отправке данных на сервер, чтобы пользователь видел закгрузку
  setNewLoadingText() {
    this._popup.querySelector('.pop-up__btn-save').textContent = 'Сохранение...';
  }
  // после загрузки возвращается преждний текст
  defaultTextBtn() {
    this._popup.querySelector('.pop-up__btn-save').textContent = this._popupBtn;
  }
}
export default PopupWithConfirm;
