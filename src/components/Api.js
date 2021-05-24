


export default class Api {
  constructor({baseUrl, headers}) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`,{
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  userEdit(data) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: data['content-name'],
        about: data['content-job']
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  newCard(data) {
    return fetch(`${this._baseUrl}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: data['content-name-foto'],
        link: data['content-foto']
      })
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers,
    })
    .then(res => res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`))
  }

  upgradeAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: avatar['contentFotoAvatar']
      })
    })
  }

}
