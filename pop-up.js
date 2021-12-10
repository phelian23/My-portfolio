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
  mainWorkHead.textContent = 'Bookstore';
  mainWorkText.textContent = 'This project is used to display a list of books. Users can add/remove books from the list. It is built with ReactJS and Redux. It implements Routing, and Components concepts';
  workLangList1P.textContent = 'ReactJs';
  workLangList2P.textContent = 'Redux';
  workLangList3P.textContent = 'JavaScript';
  workLangList4P.textContent = 'CSS';
  workBtn.textContent = 'See Project';
  workBtn.setAttribute('id', 'text-0');

  const workArray = [
    {
      title: 'Math Magician',
      description: "'Math magicians' is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to make simple calculations. and read a random math-related quote.",
      languages: ['ReactJs', 'JavaScript', 'Css'],
      livelink: 'https://phelian23.github.io/math-magician/',
      sourcelink: 'https://github.com/phelian23/math-magician',
      image: 'Images/MathMagic.PNG',
    },
    {
      title: 'Leaderboard',
      description: "This leaderboard website allows scores submitted by different players to be displayed. It also allows you to submit your score. All data is preserved thanks to the external Leaderboard API service.",
      languages: ['html', 'Javascript', 'Css'],
      livelink: 'https://phelian23.github.io/leaderboard/',
      sourcelink: 'https://github.com/phelian23/leaderboard',
      image: 'Images/Capture1.PNG',
    },
    {
      title: 'Afrobeat Festival',
      description: "This project is a supposed website for the Afro Beats Festival(Imaginary). It consists of two pages and is responsive to mobile and desktop screens.",
      languages: ['html', 'Bootstrap', 'JavaScript'],
      livelink: 'https://phelian23.github.io/capstone-1/',
      sourcelink: 'https://github.com/phelian23/capstone-1',
      image: 'Images/2021-10-15.png',
    },
    {
      title: 'Movies',
      description: "In this project, we build a movie display site, using the TVmazAPI to get current streaming movies, which allows users to add comments and likes. And using the Microverse involvement API to save data such as likes and comments.",
      languages: ['JavaScript', 'webpack', 'CSS'],
      livelink: 'https://timowest12.github.io/JS-capstone/dist',
      sourcelink: 'https://github.com/phelian23/JS-capstone',
      image: 'Images/moviejs.PNG',
    },
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
            <h3 class="pop-heading-det">Bookstore</h3>
            <button data-modal-close="" class="close-button">×</button>
        </header>
        <ul class="pop-ul-det">
        <li>ReactJs</li>
        <li>Redux</li>
        <li>JavaScript</li>
        <li>Css</li>
        </ul>
        <div class="modal-cont-con">
            <img class="modal-pop-img" src="Images/bookPage.PNG">
            <div class="text-cont-pop">
                <p class="pop-text-det">This project is used to display a list of books. Users can add/remove books from the list. It is built with ReactJS and Redux. It implements Routing, and Components concepts</p>
                <div class="text-btn-con">
                    <button class="btn-modal"><a class="modal-btn" href="https://61b33c1f0f2a25000754213b--competent-chandrasekhar-b69b93.netlify.app/">See Live</a></button>
                    <button class="btn-modal"><a class="modal-btn" href="https://github.com/phelian23/bookstore">See Source</a></button>
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