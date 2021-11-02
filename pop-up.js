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
  mainWorkHead.textContent = 'Capstone Project-1';
  mainWorkText.textContent = 'This project is a supposed website for the Afro Beats Festival(Imaginary). It consists of two pages and is responsive to mobile and desktop screens.';
  workLangList1P.textContent = 'css';
  workLangList2P.textContent = 'html';
  workLangList3P.textContent = 'JavaScript';
  workLangList4P.textContent = 'Ruby';
  workBtn.textContent = 'See Project';
  workBtn.setAttribute('id', 'text-0');

  const workArray = [
    {
      title: 'To Do List',
      description: 'In this project a simple HTML list of To Do tasks  was built. The list was styled according to specifications, functionality was added to make it interactive, and the the CRUD (create, update, delete) methods was implemented. This simple web page was built using webpack and served by a webpack dev server.',
      languages: ['html', 'JavaScript', 'Css'],
      livelink: 'https://zen-perlman-c7756d.netlify.app/',
      sourcelink: 'https://github.com/phelian23/to-do-list',
      image: 'Images/2021-10-27.png',
    },
    {
      title: 'Awesome Books',
      description: 'In this project, a single page website that allows users to add/remove books from a list was built. Built with JavaScript and utilizes LocalStorage.',
      languages: ['html', 'JavaScript', 'CSS '],
      livelink: 'https://phelian23.github.io/awesome-books/',
      sourcelink: 'https://github.com/phelian23/awesome-books',
      image: 'Images/2021-10-21.png',
    },
    {
      title: 'Multi-Post Stories',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: 'https://github.com/phelian23',
      sourcelink: 'https://github.com/phelian23',
      image: 'Images/SnapshootPortfolio.png',
    },
    {
      title: 'Website portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: 'https://github.com/phelian23',
      sourcelink: 'https://github.com/phelian23',
      image: 'Images/SnapshootPortfolio.png',
    },
    {
      title: 'Website portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: 'https://github.com/phelian23',
      sourcelink: 'https://github.com/phelian23',
      image: 'Images/SnapshootPortfolio.png',
    },
    {
      title: 'Website portfolio',
      description: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
      languages: ['html', 'Bootstrap', 'Ruby'],
      livelink: 'https://github.com/phelian23',
      sourcelink: 'https://github.com/phelian23',
      image: 'Images/SnapshootPortfolio.png',
    },

  ];

  for (let i = 0; i < workArray.length; i += 1) {
    const work = workArray[i];
    let technologieslang = '';
    let popLang = '';
    const index = i + 1;

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
             <button id = "text-${index}" type="button">See Project</button>
        </div>
        `;

    document.querySelector('.work').innerHTML
    += `
    <div id="modal-pop-up-${index}" class="modal-pop-up">
    <div class="cont-pop-up">
        <header class="pop-cont-container">
            <h3 class="pop-heading-det">${work.title}</h3>
            <button data-modal-close="" class="close-button">×</button>
        </header>
        <ul class="pop-ul-det">
            ${popLang}
        </ul>
        <div class="modal-cont-con">
            <img class="modal-pop-img" src="${work.image}">
            <div class="text-cont-pop">
                <p class="pop-text-det">${work.description}</p>
                <div class="text-btn-con">
                    <button class="btn-modal"><a class="modal-btn" href="${work.livelink}">See Live</a></button>
                    <button class="btn-modal"><a class="modal-btn" href="${work.sourcelink}">See Source</a></button>
                </div>
            </div>
        </div>
    </div>
</div>`;
  }

  document.querySelector('.work').innerHTML
    += `
    <div id="modal-pop-up-0" class="modal-pop-up">
    <div class="cont-pop-up">
        <header class="pop-cont-container">
            <h3 class="pop-heading-det">Capstone Project-1</h3>
            <button data-modal-close="" class="close-button">×</button>
        </header>
        <ul class="pop-ul-det">
        <li>css</li>
        <li>html</li>
        <li>JavaScript</li>
        <li>Ruby</li>
        </ul>
        <div class="modal-cont-con">
            <img class="modal-pop-img" src="Images/2021-10-15.png">
            <div class="text-cont-pop">
                <p class="pop-text-det">This project is a supposed website for the Afro Beats Festival(Imaginary). It consists of two pages and is responsive to mobile and desktop screens.</p>
                <div class="text-btn-con">
                    <button class="btn-modal"><a class="modal-btn" href="https://phelian23.github.io/capstone-1/">See Live</a></button>
                    <button class="btn-modal"><a class="modal-btn" href="https://github.com/phelian23/capstone-1">See Source</a></button>
                </div>
            </div>
        </div>
    </div>
</div>`;

  function openPopUp(popUpMod) {
    popUpMod.classList.add('active');
  }

  for (let i = 0; i <= workArray.length; i += 1) {
    const index = i;
    const openModal = document.querySelectorAll(`#text-${index}`);

    openModal.forEach((button) => {
      button.addEventListener('click', () => {
        const popUpMod = document.querySelector(`#modal-pop-up-${index}`);
        openPopUp(popUpMod);
      });
    });
  }

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