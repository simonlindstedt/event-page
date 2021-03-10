import "./navigation.js";
import "./queryParams.js";
// anime.js
import anime from "animejs";
// scroll magic
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

const contentBoxContent = document.querySelectorAll(".content-box *");

let contentBoxIn = anime({
  targets: contentBoxContent,
  opacity: [0, 1],
  delay: anime.stagger(100),
  duration: 1000,
  easing: "easeInSine",
  autoplay: false,
});

contentBoxIn.seek(0);

let controller = new ScrollMagic.Controller();

let contentBoxScroll = new ScrollMagic.Scene({
  triggerElement: ".content-box",
  offset: 100,
  triggerHook: "onCenter",
}).addIndicators();

controller.addScene(contentBoxScroll);

contentBoxScroll.on("enter", () => {
  console.log("hello enter!");
  if (!contentBoxIn.completed) {
    contentBoxIn.play();
  }
});
