

export default class Popup {
  constructor(popup) {
    this._popup = popup;
    this._handleEscClose = this._handleEscClose.bind();
  }
  open() {
    this._popup.classList.add('pop-up_active');
    document.addEventListener('keydown', this._handleEscClose);
    this._closePopUpOverlay();
  }
  close() {
    this._popup.classList.remove('pop-up_active');
    document.removeEventListener('keydown', this._handleEscClose);
  }
  _handleEscClose(event) {
    if (event.key === "Escape") {
      event.preventDefault();
      this.close();
    }
  }
  _closePopUpOverlay() {
    this._overlays = Array.from(document.querySelectorAll('.pop-up'));
    this._overlays.forEach(popup => {
      popup.addEventListener('click', () => this.close())
    })
    this._popUpStopPropagation();
  }
  _popUpStopPropagation() {
    this._allPopUpContainers = Array.from(document.querySelectorAll('.pop-up__container'));
    this._popUpIdFoto = document.querySelector('.pop-up__foto-container');
    this._allPopUpContainers.push(this._popUpIdFoto);
    this._allPopUpContainers.forEach(el => el.addEventListener('click', (evt) => evt.stopPropagation()));
  }
  setEventListeners() {
    this._popup.querySelector('.pop-up__btn-close').addEventListener('click', () => this.close());
  }
}
