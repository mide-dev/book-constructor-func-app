// mobile navigation logic
const hamburger = document.getElementById("hamburger");
const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const mobileNavigationMenu = document.getElementById("mobile-nav");
const mainContent = document.getElementById("main-content");

hamburger.onclick = () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");
  mobileNavigationMenu.classList.toggle("hidden");
  mainContent.classList.toggle("fixed");
};
