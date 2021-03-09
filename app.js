var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: ".projects",
})
  .setClassToggle(".proj-1-img", "scaleUp")
  .addTo(controller);
