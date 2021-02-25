let editBtn = document.querySelector('.edit-button');
let popUp = document.querySelector('.pop-up');
let popUpActive = document.querySelector('.pop-up_active');
let popUpClose = document.querySelector('.pop-up__close');


const openPopUp = () => {
  popUp.classList.add('pop-up_active');
}

const closePopUp = () => {
  popUp.classList.remove('pop-up_active');
}


popUpClose.addEventListener('click', closePopUp);
editBtn.addEventListener('click', openPopUp);


