export const hamburgerButton = document.querySelector(".hamburger");
const navListBackground = document.querySelector(".nav-list-background");
const navList = document.querySelector(".nav-list");
export const navLinks = navList.querySelectorAll("a");
export const scrollDownButton = document.querySelector(".scroll-down");

export function toggleMenu() {
  hamburgerButton.classList.toggle("active");
  navListBackground.classList.toggle("active");
  navList.classList.toggle("active");
  // scales the background-circle for the navigation
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
    navListBackground.style.transform = `scale(1)`;
    document.body.style.overflow = "auto";
  }
}

export function scrollDown() {
  const afterHeader = document.querySelector("section");
  afterHeader.scrollIntoView();
}
