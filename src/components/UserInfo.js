

export default class UserInfo {
  constructor(userName, userJob) {
    this._userName = userName;
    this._userJob = userJob;

  }

  getUserInfo() {
    const user = {
      NameUser: this._userName.textContent,
      JobUser: this._userJob.textContent,
    };
    return user
  }

  setUserInfo(data) {
    this._userName.textContent = data['content-name'];
    this._userJob.textContent = data['content-job'];

  }
}
