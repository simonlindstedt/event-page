import ScrollMagic from "scrollmagic";

let controller = new ScrollMagic.Controller();

export const headerScroll = new ScrollMagic.Scene({
  triggerElement: "header",
  triggerHook: "onLeave",
  duration: "100%",
}).addTo(controller);

export let contentBoxScroll = new ScrollMagic.Scene({
  triggerElement: ".content-box",
  triggerHook: "onCenter",
}).addTo(controller);
