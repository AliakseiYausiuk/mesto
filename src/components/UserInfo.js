

export default class UserInfo {
  constructor(userName, userJob, avatar, userId) {
    this._userName = userName;
    this._userJob = userJob;
    this._avatar = avatar;
    this._userId = userId;
  }

  // выводим объект с информацией пользователя
  getUserInfo() {
    const user = {
      nameUser: this._userName.textContent,
      jobUser: this._userJob.textContent,
    };
    return user
  }

  // перезаписываем информацию о пользователе
  setUserInfo(data) {
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._avatar.src = data.avatar;
  }

  getUser() {
    return {
      user: this._userId
    }
  }
}
