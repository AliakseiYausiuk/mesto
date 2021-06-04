

export default class UserInfo {
  constructor(userName, userJob, avatar) {
    this._userName = userName;
    this._userJob = userJob;
    this._avatar = avatar;
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
    if (data.name) this._userName.textContent = data.name;
    if (data.about) this._userJob.textContent = data.about;
    if (data.avatar) this._avatar.src = data.avatar;
  }
}
