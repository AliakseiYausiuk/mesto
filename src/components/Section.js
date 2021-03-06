export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);

  }
  // отрисовываем все карточки
  renderItems(data) {
    data.forEach(item => this._renderer(item));
  }
  // добавляем карточку в начала станицы
  addItem(element) {
    this._container.prepend(element);
  }
}
