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

const openModal = document.querySelectorAll('[data-modal-target]');

function openPopUp(popUpMod) {
  popUpMod.classList.add('active');
}

openModal.forEach((button) => {
  button.addEventListener('click', () => {
    const popUpMod = document.querySelector(button.dataset.modalTarget);
    openPopUp(popUpMod);
  });
});

const modal1 = {
  title: document.getElementById('title').textContent,
  language1: document.getElementById('language1').textContent,
  language2: document.getElementById('language2').textContent,
  language3: document.getElementById('language3').textContent,
  projectText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.",
  live: 'https://www.google.com',
  source: 'https://www.github.com',
};

document.addEventListener('DOMContentLoaded', () => {
  const section = document.createElement('section');
  const Body = document.querySelector('body');
  const contPop = document.createElement('div');
  const header1 = document.createElement('header');
  const popCont = document.createElement('div');
  const heading = document.createElement('h3');
  const projectText = document.createElement('p');
  const projectLang = document.createElement('ul');
  const projectLangList1 = document.createElement('li');
  const projectLangList2 = document.createElement('li');
  const projectLangList3 = document.createElement('li');
  const closeButton = document.createElement('button');
  const modalImg = document.createElement('img');
  const textCont = document.createElement('div');
  const textBtnCont = document.createElement('div');
  const textBtn1 = document.createElement('button');
  const textBtn2 = document.createElement('button');
  const btnLink1 = document.createElement('a');
  const btnLink2 = document.createElement('a');
  const btnImg1 = document.createElement('img');
  const btnImg2 = document.createElement('img');

  contPop.classList.add('cont-pop-up');
  section.id = ('modal-pop-up');
  section.appendChild(contPop);
  section.classList.add('modal-pop-up');
  Body.appendChild(section);
  contPop.appendChild(header1);
  header1.appendChild(heading);
  header1.appendChild(closeButton);
  contPop.appendChild(projectLang);
  projectLang.appendChild(projectLangList1);
  projectLang.appendChild(projectLangList2);
  projectLang.appendChild(projectLangList3);
  contPop.appendChild(popCont);
  popCont.appendChild(modalImg);
  popCont.appendChild(textCont);
  textCont.appendChild(projectText);
  textCont.appendChild(textBtnCont);
  textBtnCont.appendChild(textBtn1);
  textBtnCont.appendChild(textBtn2);
  textBtn1.appendChild(btnLink1);
  textBtn2.appendChild(btnLink2);

  header1.classList.add('pop-cont-container');
  heading.classList.add('pop-heading-det');
  projectText.classList.add('pop-text-det');
  projectLang.classList.add('pop-ul-det');
  projectLangList1.classList.add('pop-li-det');
  projectLangList2.classList.add('pop-li-det');
  projectLangList3.classList.add('pop-li-det');
  closeButton.dataset.modalClose = '';
  closeButton.classList.add('close-button');
  modalImg.classList.add('modal-pop-img');
  popCont.classList.add('modal-cont-con');
  textCont.classList.add('text-cont-pop');
  textBtnCont.classList.add('text-btn-con');
  textBtn1.classList.add('btn-modal');
  textBtn2.classList.add('btn-modal');
  btnLink1.classList.add('modal-btn');
  btnLink2.classList.add('modal-btn');
  btnImg1.classList.add('btn-img');
  btnImg2.classList.add('btn-img');

  heading.textContent = modal1.title;
  projectText.textContent = modal1.projectText;
  closeButton.innerHTML = '&times;';
  projectLangList1.textContent = modal1.language1;
  projectLangList2.textContent = modal1.language2;
  projectLangList3.textContent = modal1.language3;
  modalImg.src = 'Images/SnapshootPortfolio.png';
  btnLink1.textContent = 'See Live';
  btnLink1.href = modal1.live;
  btnLink1.appendChild(btnImg1);
  btnImg1.src = 'Images/Icon-Export.png';
  btnLink2.textContent = 'See Source';
  btnLink2.href = modal1.source;
  btnLink2.appendChild(btnImg2);
  btnImg2.src = 'Images/github.png';

  const closeModal = document.querySelectorAll('[data-modal-close]');

  function closePopUp(popUpMod) {
    popUpMod.classList.remove('active');
  }

  closeModal.forEach((button) => {
    button.addEventListener('click', () => {
      const popUpMod = button.closest('.modal-pop-up');
      closePopUp(popUpMod);
    });
  });
});