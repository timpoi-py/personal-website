const navMenu = document.getElementById("nav-menu-burger");
const navMenuExit = document.getElementById("nav-menu-burger-exit");
const smallScNav = document.getElementById("small-sc-nav");

const toggleMenu = () => {
  smallScNav.classList.toggle("show");
};

const toggleBurgerandExit = () => {
  navMenu.classList.toggle("show");
  navMenuExit.classList.toggle("show");
};

navMenu.onclick = () => {
  toggleMenu();
  toggleBurgerandExit();
};
navMenuExit.onclick = () => {
  toggleMenu();
  toggleBurgerandExit();
};
