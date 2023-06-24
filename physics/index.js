const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const core = new Core(canvas, context);
let GRAVITY;
let body;
let isPaused;
// let justUnpaused;  // TODO if game is paused, don't update elapsed time
let startTime;

const restartButton = document.getElementById("RestartButton");
restartButton.addEventListener("click", () => {
    start();
});

const pauseButton = document.getElementById("PauseButton");
pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;
    // justUnpaused = true;
    pauseButton.textContent = isPaused ? "Unpause" : "Pause";
});

const finalVelocityElement = document.getElementById("finalVelocity");
finalVelocityElement.textContent = `Final Velocity: []`;

function start() {
    isPaused = false;
    pauseButton.textContent = "Pause";
    finalVelocityElement.textContent = `Final Velocity: []`;

    const gravityInput = document.getElementById("gravityInput");
    GRAVITY = parseFloat(gravityInput.value);

    core.reset();

    body = new Body(
        new Rect(100, 0, 50, 50, "blue"),
        (initialVel = [0, 0]),
        (initialAcc = [0, 0]),
        (mass = 1),
        GRAVITY
    );
    core.addBody(body);

    startTime = Date.now();
}

function update() {
    if (isPaused) {
        requestAnimationFrame(update);
        return;
    }
    // } else if (justUnpaused) {
    //     justUnpaused = false;
    //     startTime = Date.now();
    //     console.log(startTime);
    // }

    context.clearRect(0, 0, canvas.width, canvas.height);

    core.drawGraph();

    core.update();

    core.render(context);

    // for (const body of core.allBodies) {
    //     context.fillText(`(${body.x}, ${body.y})`, body.x + 10, body.y - 10);
    // }

    requestAnimationFrame(update);
}

start();
update();
