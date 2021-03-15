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

let waveUp = anime({
  targets: ".wave-up path",
  d: [
    "M1440 29.9786L1428.6 23.8747C1417.1 17.6561 1394 5.62017 1371 14.7044C1348.6 23.9606 1326 54.337 1303 54.423C1280 54.337 1257 23.9606 1234 19.2895C1211.4 14.7904 1189 35.9966 1166 36.0825C1142.9 35.9966 1120 14.7904 1097 5.53421C1074.3 -3.55006 1051 -0.684366 1029 8.57184C1005.7 17.6561 983 33.1309 960 36.0825C937.1 39.1488 914 29.9786 891 34.5637C868.6 39.1488 846 57.4893 823 54.423C800 51.4713 777 26.8263 754 25.3935C731.4 23.9606 709 45.1668 686 55.9705C662.9 66.6595 640 66.6595 617 63.5932C594.3 60.6416 571 54.337 549 49.8379C525.7 45.1668 503 42.3011 480 37.63C457.1 33.1309 434 26.8263 411 33.0449C388.6 39.1488 366 57.4893 343 54.423C320 51.4713 297 26.8263 274 22.3272C251.4 17.6561 229 33.1309 206 33.0449C182.9 33.1309 160 17.6561 137 22.3272C114.3 26.8263 91 51.4713 69 55.9705C45.7 60.6416 23 45.1668 11 37.63L0 29.9786V85H11.4C22.9 85 46 85 69 85C91.4 85 114 85 137 85C160 85 183 85 206 85C228.6 85 251 85 274 85C297.1 85 320 85 343 85C365.7 85 389 85 411 85C434.3 85 457 85 480 85C502.9 85 526 85 549 85C571.4 85 594 85 617 85C640 85 663 85 686 85C708.6 85 731 85 754 85C777.1 85 800 85 823 85C845.7 85 869 85 891 85C914.3 85 937 85 960 85C982.9 85 1006 85 1029 85C1051.4 85 1074 85 1097 85C1120 85 1143 85 1166 85C1188.6 85 1211 85 1234 85C1257.1 85 1280 85 1303 85C1325.7 85 1349 85 1371 85C1394.3 85 1417 85 1429 85H1440V29.9786Z",
  ],
  duration: 15000,
  loop: true,
  easing: "easeInOutSine",
  direction: "alternate",
});

console.log(document.querySelectorAll("header .text *"));

let headerTextFadeIn = anime({
  targets: "header .text *",
  opacity: [0, 1],
  delay: anime.stagger(200),
  duration: 3500,
  easing: "easeOutSine",
});

let headerImageGrow = anime({
  targets: "header img",
  scale: 1.1,
  duration: 3500,
  easing: "easeOutSine",
});

let scrollButtonAnimation = anime({
  targets: ".scroll-down",
  scale: 1.2,
  duration: 2000,
  autoplay: false,
  loop: true,
  direction: "alternate",
});

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

let contentBoxText = anime({
  targets: ".content-box .orange",
  color: ["#000", "#ed7102"],
  scale: 1.2,
  duration: 1000,
  delay: 500,
  easing: "easeOutSine",
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
  if (!contentBoxText.completed) {
    contentBoxText.play();
  }
});
