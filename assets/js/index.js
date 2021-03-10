import "./navigation.js";
import "./queryParams.js";
// anime.js
import anime from "animejs";
// scroll magic
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

let contentBoxIn = anime({
  targets: ".content-box *",
  opacity: [0, 1],
  delay: anime.stagger(200),
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
  if (!contentBoxIn.completed) {
    contentBoxIn.play();
  }
});

function dripAnimation() {
  anime({
    targets: ".drip svg g path",
    translateY: function () {
      return anime.random(0, 50);
    },
    duration: 10000,
    delay: anime.stagger(200, { from: "center", easing: "easeOutQuad" }),
    loop: true,
    autoplay: true,
    easing: "easeInOutExpo",
    direction: "alternate",
    complete: dripAnimation,
  });
}
dripAnimation();
