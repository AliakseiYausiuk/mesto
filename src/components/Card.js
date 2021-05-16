// import {openPopUp, popupImg, popupImgText, openPopupFoto} from '../utils/constants.js';

export default class Card {
  constructor(item, cardSelector, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._alt = item.alt;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  // копируем template элемент
  _getTemplate() {
    const contentTemplate = document.querySelector(this._cardSelector)
    .content
    .querySelector('.cards__card')
    .cloneNode(true)

    return contentTemplate;
  }
  generateCard() {
    // отрисовываем карточку
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__text').textContent = this._name;
    this._imageElement = this._element.querySelector('.cards__foto');

    this._imageElement.src = this._link;
    this._imageElement.alt = this._alt;

    return this._element;
  }

  _setEventListeners() {
    // оброботчики событий
    this._element.querySelector('.cards__foto').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
    this._element.querySelector('.cards__btn-delete').addEventListener('click', () => {
      this._element.querySelector('.cards__btn-delete').closest('.cards__card').remove();
    })
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    })

  }
}
