

export default class Card {
  constructor({item}, cardSelector, handleCardDelete, handleCardClick) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    // this._likeFoto = likeFoto;
    // this._alt = item.alt;
    this._id = item._id;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
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
    this._imageElement.alt = 'фото карточки'


    this._element.querySelector('.cards__like-number').textContent = this._likes.length

    return this._element;
  }

  getId() {
    return this._id
  }

  removeCard() {
    this._element.remove();

    this._element = null;
  }

  // like() {
  //   console.log(this._likes);
  // }

  // оброботчики событий
  _setEventListeners() {
    this._element.querySelector('.cards__foto').addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    });
    this._element.querySelector('.cards__btn-delete').addEventListener('click', () => {
      // this._element.querySelector('.cards__btn-delete').closest('.cards__card').remove();
      this._handleCardDelete();
    })
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    })

  }
}
