

export default class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;

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
    this._userName.textContent = data['content-name'];
    this._userJob.textContent = data['content-job'];

  }
}
