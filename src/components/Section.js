export default class Section {
  constructor({item, renderer}, containerSelector) {
    this._initialArray = item;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);

  }
  // отрисовываем все карточки
  renderItems() {
    this._initialArray.forEach(item => this._renderer(item));
  }
  // добавляем карточку в начала станицы
  addItem(element) {
    this._container.prepend(element);
  }
}
