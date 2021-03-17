import { headerScroll, contentBoxScroll } from "./scrollMagic.js";
import {
  hamburgerButton,
  navLinks,
  scrollDown,
  scrollDownButton,
  toggleMenu,
} from "./navigation.js";
import { firstNameActions, lastNameActions } from "./queryParams.js";
import {
  contentBoxText,
  dripAnimation,
  headerParallax,
  scrollButtonAnimation,
} from "./animations.js";
import { changeImage, setUpGallery, slider } from "./imageGallery.js";

// run queryParam actions
firstNameActions();
lastNameActions();

// navigation events
hamburgerButton.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", toggleMenu);
});

// header events
scrollDownButton.addEventListener("click", scrollDown);

headerScroll.on("enter", () => {
  setTimeout(() => {
    scrollButtonAnimation.play();
  }, 1000);
});

headerScroll.on("progress", (event) => {
  headerParallax.seek(headerParallax.duration * event.progress);
});

// content-box events
contentBoxScroll.on("enter", () => {
  if (!contentBoxText.completed) {
    contentBoxText.play();
  }
});

// start drip animation
dripAnimation();

// image gallery
setUpGallery();
slider.addEventListener("scroll", changeImage);
