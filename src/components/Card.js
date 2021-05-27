

export default class Card {
  constructor(item, cardSelector, handleCardDelete, handleCardClick, handleCardLike) {
    this._name = item.name;
    this._link = item.link;
    this._likes = item.likes;
    this._id = item._id;
    this._ownerId = item.owner._id;
    this._currentUserId = item.currentUserId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
    // this._alt = item.alt;
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

    // показываем количество лайков
    this._element.querySelector('.cards__like-number').textContent = this._likes.length;

    // удаляем кнопу удадения картинок если это не картинка полльзователя
    if (this._currentUserId !== this._ownerId) {
      this._element.querySelector('.cards__btn-delete').remove();
    }

    this._isLiked = this._likes.find(user => user._id == this._currentUserId) // null //

    if(this._isLiked) {
      // закрась сердечко
      this._element.querySelector('.cards__like').classList.add('cards__like_active');
    } else {

      this._element.querySelector('.cards__like').classList.remove('cards__like_active');
    }

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
      this._handleCardDelete(this);
    })
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._handleCardLike(!this._isLiked)
      // this._element.querySelector('.cards__like').classList.toggle('cards__like_active');
    })

  }
}
