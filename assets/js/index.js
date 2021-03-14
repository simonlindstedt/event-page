import "./preloader.js";
import "./animations.js";
// import "./navigation.js";
import "./imageGallery.js";
import "./queryParams.js";

import {
  toggleMenu,
  scrollDown,
  hamburgerButton,
  scrollDownButton,
  navLinks,
} from "./navigation.js";

hamburgerButton.addEventListener("click", toggleMenu);
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", toggleMenu);
});
scrollDownButton.addEventListener("click", scrollDown);
