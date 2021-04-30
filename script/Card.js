import {openPopUp, popupImg, popupImgText} from './index.js';

export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
  }
  // копируем template элемент
  _getTemplate() {
    const contentTemplate = document.querySelector('#content')
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
    const pathImgCard = this._element.querySelector('.cards__foto');

    pathImgCard.src = this._link;
    pathImgCard.alt = this._alt;

    return this._element;
  }

  _openPopUpFotos() {
    popupImg.src = this._link;
    popupImgText.textContent = this._name;
    openPopUp(document.querySelector('#pop-up-foto'));
  }

  _setEventListeners() {
    this._element.querySelector('.cards__foto').addEventListener('click', () => {
      this._openPopUpFotos();
    });
    this._element.querySelector('.cards__btn-delete').addEventListener('click', () => {
      this._element.querySelector('.cards__btn-delete').closest('.cards__card').remove();
    })
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    })

  }
}
