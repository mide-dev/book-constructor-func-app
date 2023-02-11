// mobile navigation logic
const hamburger = document.getElementById("hamburger");
const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const mobileNavigationMenu = document.getElementById("mobile-nav");
const mainContent = document.getElementById("main-content");

// hamburger menu on mobile
hamburger.onclick = () => {
  openMenu.classList.toggle("hidden");
  closeMenu.classList.toggle("hidden");

  // show/hide menu content
  mobileNavigationMenu.classList.toggle("hidden");

  // prevent page scrolling while menu is open
  // mainContent.classList.toggle("inset-x-[3%]");
  // mainContent.classList.toggle("fixed");
};
//
