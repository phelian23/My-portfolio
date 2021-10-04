const crossMenu = document.querySelector(".close");
const menuCont = document.querySelector(".nav-items");

crossMenu.addEventListener("click", closeMobMenu);

function closeMobMenu() {
  menuCont.classList.remove("menu-open");
}
