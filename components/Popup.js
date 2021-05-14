

export default class Popup {
  constructor(popup) {
    this._popup = popup
  }
  open() {
    this._popup.classList.add('pop-up_active');
    document.addEventListener('keydown', this._handleEscClose);
  }
  close = () => {
    this._popup.classList.remove('pop-up_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
    }
  }
  setEventListeners() {
    this._popup.querySelector('.pop-up__btn-close').addEventListener('click', () => this.close());
  }
}
