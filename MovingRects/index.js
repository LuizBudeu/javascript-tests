// import { Rect } from "./rect.js";
// import { Body } from "./body.js";

const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

let square;
let squareSpeed;

let body;
function start() {
    square = new Rect(0, 0, 50, 50, "green");
    squareSpeed = 5;

    body = new Body(0, 100, 50, 50, "blue", 10);
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (square.x + square.width > canvas.width) {
        squareSpeed = -5;
    } else if (square.x < 0) {
        squareSpeed = 5;
    }

    if (body.x + body.width > canvas.width) {
        body.velocityX *= -1;
    } else if (body.x < 0) {
        body.velocityX *= -1;
    }

    square.move(squareSpeed, 0);
    body.move(body.velocityX, 0);

    square.draw(context);
    body.draw(context);

    // body.showVelocity(context);
    body.drawWithVelocity(context);

    requestAnimationFrame(update);
}

const button = document.getElementById("startButton");
button.addEventListener("click", () => {
    start();
});

start();
update();
