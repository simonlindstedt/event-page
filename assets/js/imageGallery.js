const gallery = document.querySelector(".gallery");
const slider = document.querySelector(".images");
const slides = slider.querySelectorAll(".slide");
const dots = document.createElement("div");
dots.classList.add("indicators");

for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("button");
  if (i === 0) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => {
    slider.scroll({
      left: window.innerWidth * i,
      behavior: "smooth",
    });
  });
  dots.appendChild(dot);
}
gallery.appendChild(dots);
slider.addEventListener("scroll", () => {
  let slide = slider.scrollLeft / window.innerWidth;
  if (slide === Math.floor(slide)) {
    let dot = dots.children[slide];
    for (let i = 0; i < dots.children.length; i++) {
      dots.children[i].classList.remove("active");
    }
    dot.classList.add("active");
  }
});
