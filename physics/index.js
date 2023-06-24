const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const GRAVITY = 0.001;

const core = new Core(canvas, context);
let body;

function start() {
    core.reset();

    body = new Body(100, 100, 50, 50);
    core.addBody(body);
}

function update() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    core.update();

    core.render(context);

    requestAnimationFrame(update);
}

const restartButton = document.getElementById("RestartButton");
restartButton.addEventListener("click", () => {
    start();
});

start();
update();
