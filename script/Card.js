


const btnClosePopup = document.querySelector('#pop-up-foto__btn-close');
const popUpSupplement = document.querySelector('#pop-up-foto');



export class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
  }
  _getTemplate() {
    const contentTemplate = document.querySelector('#content')
    .content
    .querySelector('.cards__card')
    .cloneNode(true)

    return contentTemplate;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.cards__text').textContent = this._name;
    const pathImgCard = this._element.querySelector('.cards__foto');

    pathImgCard.src = this._link;
    pathImgCard.alt = this._alt;

    return this._element;
  }

  _openPopUpFotos() {
   document.querySelector('.pop-up__img').src = this._link;
   popUpSupplement.classList.add('pop-up_active');
  }

  _closePopUpFotos() {
    popUpSupplement.classList.remove('pop-up_active');
  }

  _setEventListeners() {
    this._element.querySelector('.cards__like').addEventListener('click', () => {

    })
    this._element.querySelector('.cards__btn-delete').addEventListener('click', () => {

    });
    this._element.querySelector('.cards__foto').addEventListener('click', () => {
      this._openPopUpFotos();
    });
    btnClosePopup.addEventListener('click', () => {
      this._closePopUpFotos();
    });
    this._element.querySelector('.cards__btn-delete').addEventListener('click', () => {
      this._element.querySelector('.cards__btn-delete').closest('.cards__card').remove();
    })
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    })

  }
}
