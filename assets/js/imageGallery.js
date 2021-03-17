const gallery = document.querySelector(".gallery");
export const slider = document.querySelector(".images");
const slides = slider.querySelectorAll(".slide");
const dots = document.createElement("div");
dots.classList.add("indicators");

export function setUpGallery() {
  for (let i = 0; i < slides.length; i++) {
    let dot = document.createElement("button");
    dot.setAttribute("aria-label", `show image number ${i + 1}`);
    if (i === 0) {
      dot.classList.add("active");
    }
    dot.addEventListener("click", () => {
      slider.scroll({
        left: slides[i].scrollWidth * i,
        behavior: "smooth",
      });
    });
    dots.appendChild(dot);
  }
  gallery.appendChild(dots);
}

export function changeImage() {
  let slideWidth = slides[0].scrollWidth;
  let slideLength = slider.scrollLeft / slideWidth;
  if (slideLength === Math.floor(slideLength)) {
    let dot = dots.children[slideLength];
    for (let i = 0; i < dots.children.length; i++) {
      dots.children[i].classList.remove("active");
    }
    dot.classList.add("active");
  }
}
