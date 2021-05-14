import {userName, userJob, nameInput, jobInput} from '../utils/constants.js';

export default class UserInfo {
  constructor(data) {
    this._data = data;
  }

  getUserInfo() {
    nameInput.value = userName.textContent;
    jobInput.value = userJob.textContent;
  }

  setUserInfo() {
    userName.textContent = this._data['content-name'];
    userJob.textContent = this._data['content-job'];
  }
}
