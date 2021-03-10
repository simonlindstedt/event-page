const hamburgerButton = document.querySelector(".hamburger");
const navListBackground = document.querySelector(".nav-list-background");
const navList = document.querySelector(".nav-list");

hamburgerButton.addEventListener("click", () => {
  navListBackground.classList.toggle("active");
  navList.classList.toggle("active");
});
