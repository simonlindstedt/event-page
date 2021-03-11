// anime.js
import anime from "animejs";
// scroll magic
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

let wave = anime({
  targets: ".wave path",
  d: [
    "M0 75.1827L11.4 76.9616C22.9 78.8747 46 82.2311 69 78.774C91.4 75.1827 114 64.4423 137 50.1106C160 35.9132 183 17.7888 206 17.8895C228.6 17.7888 251 35.9132 274 48.3318C297.1 60.7503 320 68.1343 343 59.0721C365.7 50.0099 389 25.1728 411 19.7019C434.3 14.4324 457 28.5292 480 39.3702C502.9 50.0099 526 57.394 549 55.4808C571.4 53.7019 594 42.9616 617 41.1827C640 39.2695 663 46.6536 686 44.7404C708.6 42.9616 731 32.2212 754 34C777.1 35.9132 800 50.0099 823 57.2933C845.7 64.4423 869 64.4423 891 69.8125C914.3 75.1827 937 85.9231 960 87.702C982.9 89.6151 1006 82.2311 1029 68.0337C1051.4 53.7019 1074 32.2212 1097 23.2597C1120 14.4324 1143 17.7888 1166 19.7019C1188.6 21.4808 1211 21.4808 1234 26.851C1257.1 32.2212 1280 42.9616 1303 39.3702C1325.7 35.9132 1349 17.7888 1371 10.7404C1394.3 3.69201 1417 7.04838 1429 8.96151L1440 10.7404V0H1428.6C1417.1 0 1394 0 1371 0C1348.6 0 1326 0 1303 0C1280 0 1257 0 1234 0C1211.4 0 1189 0 1166 0C1142.9 0 1120 0 1097 0C1074.3 0 1051 0 1029 0C1005.7 0 983 0 960 0C937.1 0 914 0 891 0C868.6 0 846 0 823 0C800 0 777 0 754 0C731.4 0 709 0 686 0C662.9 0 640 0 617 0C594.3 0 571 0 549 0C525.7 0 503 0 480 0C457.1 0 434 0 411 0C388.6 0 366 0 343 0C320 0 297 0 274 0C251.4 0 229 0 206 0C182.9 0 160 0 137 0C114.3 0 91 0 69 0C45.7 0 23 0 11 0H0V75.1827Z",
  ],
  duration: 20000,
  autoplay: true,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
});

let scrollButtonAnimation = anime({
  targets: ".scroll-down",
  scale: 1.2,
  duration: 2000,
  autoplay: false,
  loop: true,
  direction: "alternate",
});

let contentBoxIn = anime({
  targets: ".content-box *",
  opacity: [0, 1],
  delay: anime.stagger(200),
  duration: 1000,
  easing: "easeOutSine",
  autoplay: false,
});

contentBoxIn.seek(0);

let headerParallax = anime({
  targets: "header .text",
  translateY: -50,
  opacity: [1, 0.5],
  delay: function (stuff, i) {
    return i * 100;
  },
  easing: "easeOutCubic",
  autoplay: false,
});

function dripAnimation() {
  anime({
    targets: ".drip svg g path",
    translateY: function () {
      return anime.random(0, 50);
    },
    duration: 10000,
    delay: anime.stagger(200, { from: "center" }),
    loop: true,
    autoplay: true,
    easing: "easeOutSine",
    easing: "linear",
    elasticity: 200,
    direction: "alternate",
    complete: dripAnimation,
  });
}
dripAnimation();

// scrollMagic

let controller = new ScrollMagic.Controller();

let headerScroll = new ScrollMagic.Scene({
  triggerElement: "header",
  triggerHook: "onLeave",
  duration: "100%",
}).addIndicators();

let contentBoxScroll = new ScrollMagic.Scene({
  triggerElement: ".content-box",
  triggerHook: "onCenter",
}).addIndicators();

controller.addScene(headerScroll);
controller.addScene(contentBoxScroll);

headerScroll.on("enter", () => {
  setTimeout(() => {
    scrollButtonAnimation.play();
  }, 3000);
});

headerScroll.on("progress", (event) => {
  headerParallax.seek(headerParallax.duration * event.progress);
});

contentBoxScroll.on("enter", () => {
  if (!contentBoxIn.completed) {
    contentBoxIn.play();
  }
});
