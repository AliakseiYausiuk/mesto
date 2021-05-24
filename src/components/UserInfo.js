

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
    // this._userName.textContent = data['content-name'];
    // this._userJob.textContent = data['content-job'];
    this._userName.textContent = data.name;
    this._userJob.textContent = data.about;
    this._avatar.src = data.avatar;

  }
}
