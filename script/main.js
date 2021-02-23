let editButton = document.querySelector('.edit-button');
let popUp = document.querySelector('.pop-up');
let popUpClose = document.querySelector('.pop-up__close');
// let popUpActive = document.querySelector('.pop-up_active');

let profileInfo = document.querySelector('.profile__info');

let valueInfo = profileInfo.textContent;


let profileText = document.querySelector('.profile__text');

let valueText = profileText.textContent;

let popUpName = document.querySelector('.pop-up__name');
let popUpText = document.querySelector('.pop-up__text');

const closePopUp = () => {
  popUp.classList.remove('pop-up_active');
  popUp.classList.add('pop-up');

}
popUpClose.addEventListener('click', closePopUp);

const openPopUp = () => {
  popUp.classList.toggle('pop-up_active');

  popUpName.setAttribute('value' , valueInfo);
  popUpText.setAttribute('value', valueText);

}



editButton.addEventListener('click', openPopUp);
