document.addEventListener('DOMContentLoaded', () => {
  const section1 = document.querySelector('.work');
  const desWorkFl = document.createElement('main');
  const workFlImg = document.createElement('img');
  const mainWork = document.createElement('div');
  const mainWorkHead = document.createElement('h3');
  const mainWorkText = document.createElement('p');
  const workLang = document.createElement('ul');
  const workLangList1 = document.createElement('li');
  const workLangList2 = document.createElement('li');
  const workLangList3 = document.createElement('li');
  const workLangList4 = document.createElement('li');
  const workLangList1P = document.createElement('p');
  const workLangList2P = document.createElement('p');
  const workLangList3P = document.createElement('p');
  const workLangList4P = document.createElement('p');
  const workBtn = document.createElement('button');
  const workGrid = document.createElement('div');

  const popDiv = document.createElement('div');
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

  section1.appendChild(desWorkFl);
  section1.appendChild(workGrid);
  desWorkFl.appendChild(workFlImg);
  desWorkFl.appendChild(mainWork);
  mainWork.appendChild(mainWorkHead);
  mainWork.appendChild(mainWorkText);
  mainWork.appendChild(workLang);
  mainWork.appendChild(workBtn);
  workLang.appendChild(workLangList1);
  workLang.appendChild(workLangList2);
  workLang.appendChild(workLangList3);
  workLang.appendChild(workLangList4);
  workLangList1.appendChild(workLangList1P);
  workLangList2.appendChild(workLangList2P);
  workLangList3.appendChild(workLangList3P);
  workLangList4.appendChild(workLangList4P);

  contPop.classList.add('cont-pop-up');
  popDiv.id = ('modal-pop-up');
  popDiv.appendChild(contPop);
  popDiv.classList.add('modal-pop-up');
  section1.appendChild(popDiv);
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
  btnLink2.appendChild(btnImg2);
  btnLink1.appendChild(btnImg1);

  desWorkFl.classList.add('workflex');
  workFlImg.classList.add('workimage');
  mainWork.classList.add('work1');
  mainWorkHead.classList.add('work1head');
  mainWorkText.classList.add('work1text');
  workLangList1.classList.add('work1p');
  workLangList2.classList.add('work1p');
  workLangList3.classList.add('work1p');
  workLangList4.classList.add('work1p');
  workGrid.classList.add('workgrid');
  workGrid.classList.add('workgrid12');

  workFlImg.src = 'Images/ImgPlaceholder.png';
  mainWorkHead.textContent = 'Multi-Post Stories';
  mainWorkText.textContent = "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.";
  workLangList1P.textContent = 'css';
  workLangList2P.textContent = 'html';
  workLangList3P.textContent = 'bootstrap';
  workLangList4P.textContent = 'Ruby';
  workBtn.textContent = 'See Project';
  workBtn.dataset.modalTarget = '#modal-pop-up';

  header1.classList.add('pop-cont-container');
  heading.classList.add('pop-heading-det');
  projectText.classList.add('pop-text-det');
  projectLang.classList.add('pop-ul-det');
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

  const source = 'https://github.com/phelian23/My-portfolio';
  const live = 'https://github.com/phelian23/My-portfolio';

  const workArray = [
    {
      title: 'Professional Art',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: live,
      sourcelink: source,
    },
    {
      title: 'Professional Art',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby '],
      livelink: live,
      sourcelink: source,
    },
    {
      title: 'Data Dashboard',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: live,
      sourcelink: source,
    },
    {
      title: 'Website portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: live,
      sourcelink: source,
    },
    {
      title: 'Website portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: live,
      sourcelink: source,
    },
    {
      title: 'Website portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: live,
      sourcelink: source,
    },

  ];

  for (let i = 0; i < workArray.length; i += 1) {
    const work = workArray[i];
    let technologieslang = '';
    let popLang = '';

    for (let j = 0; j < work.languages.length; j += 1) {
      const lang = work.languages[j];

      technologieslang += `<li><p>${lang}</p></li>`;
      popLang += `<li>${lang}</li>`;
    }
    document.querySelector('.workgrid').innerHTML
        += ` 
        <div class="workgrid2">
            <h3 class="workgridp1">${work.title}</h3>
            <p class="workgridp2">${work.description}</p>
            <ul>
              ${technologieslang}
             </ul>
             <button data-modal-target="#modal-pop-up" type="button">See Project</button>
        </div>
        `;

    heading.textContent = work.title;
    projectText.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releax map lapora verita.";
    closeButton.innerHTML = '&times;';
    projectLang.innerHTML = popLang;
    modalImg.src = 'Images/SnapshootPortfolio.png';
    btnLink1.textContent = 'See Live';
    btnLink1.href = work.livelink;
    btnImg1.src = 'Images/Icon-Export.png';
    btnLink2.textContent = 'See Source';
    btnLink2.href = work.sourcelink;
    btnImg2.src = 'Images/github.png';
  }

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