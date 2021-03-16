document.body.style.overflow = "hidden";
window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  document.body.style.overflow = "auto";
  preloader.classList.add("done");
  setTimeout(() => {
    preloader.remove();
  }, 700);
});
