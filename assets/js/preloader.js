document.body.style.overflow = "hidden";
window.addEventListener("load", (e) => {
  const preloader = document.querySelector(".preloader");
  preloader.classList.add("done");
  document.body.style.overflow = "auto";
  setTimeout(() => {
    preloader.remove();
  }, 700);
});
