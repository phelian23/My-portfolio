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

document.addEventListener('DOMContentLoaded', () => {
  const section = document.createElement('section');
  const Body = document.querySelector('body');
  const contPop = document.createElement('section');
  contPop.classList.add('cont-pop-up');
  section.appendChild(contPop);
  section.classList.add('modal-pop-up');
  Body.appendChild(section);
});