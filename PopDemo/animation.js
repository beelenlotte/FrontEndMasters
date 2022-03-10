//run npm parser-bundler, npm init, npm install popmotion, parcel index.html

const popmotion = require("popmotion");
require("./useless");
//destructuring
const { styler, spring, listen, pointer, value } = popmotion;

const ball = document.querySelector(".box");
const divStyler = styler(ball);
const ballXY = value({ x: 0, y: 0 }, divStyler.set);

listen(ball, "mousedown touchstart").start((e) => {
  e.preventDefault();
  pointer(ballXY.get()).start(ballXY);
});

listen(document, "mouseup").start(() => {
  spring({
      from: ballXY.get(),
      velocity: ballXY.getVelocity(),
      to: { x: 0, y: 0 },
      stiffness: 200,
    })
    .start(ballXY);
});
