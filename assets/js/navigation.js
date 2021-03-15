const hamburgerButton = document.querySelector(".hamburger");
const navListBackground = document.querySelector(".nav-list-background");
const navList = document.querySelector(".nav-list");
const navLinks = navList.querySelectorAll("a");
const scrollDownButton = document.querySelector(".scroll-down");

function toggleMenu() {
  navListBackground.classList.toggle("active");
  navList.classList.toggle("active");
  if (navListBackground.classList.contains("active")) {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let scale = 0;
    if (height > width) {
      scale = (height / 80) * 3;
    } else {
      scale = (width / 80) * 3;
    }
    navListBackground.style.transform = `scale(${scale})`;
    document.body.style.overflow = "hidden";
  } else {
    navListBackground.style.transform = `scale(0)`;
    document.body.style.overflow = "auto";
  }
}

function scrollDown() {
  const afterHeader = document.querySelector("section");
  afterHeader.scrollIntoView();
}

export { toggleMenu, scrollDown, hamburgerButton, scrollDownButton, navLinks };
