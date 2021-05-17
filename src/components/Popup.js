

export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this._popup.classList.add('pop-up_active');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close() {
    this._popup.classList.remove('pop-up_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  // закрытие попапа на кнопку ESC
  _handleEscClose(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
    }
  }
  // // закрытие попапа вокруг него по пустой облости
  // _closePopUpOverlay() {
  //   this._popup.addEventListener('click', () => this.close());
  // }
  // _popUpStopPropagation() {
  //   this._popup.addEventListener('click', (evt) => evt.stopPropagation());
  // }
  setEventListeners() {
    this._popup.querySelector('.pop-up__btn-close').addEventListener('click', () => this.close());
    this._popup.addEventListener('click', (evt) => {
      evt.stopPropagation()
      if (evt.target.classList.contains('pop-up') || evt.target.classList.contains('pop-up__btn-close')) {
        this.close();
      }
    });
  }
}

