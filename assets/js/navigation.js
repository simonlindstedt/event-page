const hamburgerButton = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburgerButton.addEventListener("click", () => {
  navList.classList.toggle("active");
});
