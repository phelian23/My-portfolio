const crossMenu = document.querySelector('.togglebar');
const menuCont = document.querySelector('.nav-items');
const crossMenu2 = document.querySelector('.close');
const navItem = document.querySelectorAll('.show-list');

function openMobMenu() {
  menuCont.classList.add('menu-open');
}

crossMenu.addEventListener('click', openMobMenu);

function closeMobMenu() {
  menuCont.classList.remove('menu-open');
}

crossMenu2.addEventListener('click', closeMobMenu);

navItem.forEach((menuItem) => {
  menuItem.addEventListener('click', closeMobMenu);
});

const form = document.getElementById('form');
const email = document.querySelector('.email');
const errorMsg = document.querySelector('small');

form.addEventListener('submit', (event) => {
  let errorMessage = '';
  const emailLower = email.value.toLowerCase();
  if (emailLower !== email.value) {
    errorMessage = 'email has to be in lower case';
  }

  if (errorMessage.length > 0) {
    event.preventDefault();
    errorMsg.innerText = errorMessage;
  }
});

const formData = {
  name: document.querySelector('.name1').value,
  email: document.querySelector('.email').value,
  message: document.querySelector('.note').value,
};
let getFormData = window.localStorage.getItem('formData');
if (getFormData) {
  getFormData = JSON.parse(getFormData);
  document.querySelector('.name1').value = getFormData.name;
  document.querySelector('.email').value = getFormData.email;
  document.querySelector('.note').value = getFormData.message;
}
});