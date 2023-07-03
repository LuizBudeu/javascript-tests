const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const core = new Core(canvas, context);
let GRAVITY; // TODO fine-tune gravity
let body;
let isPaused;
// let justUnpaused;  // TODO if game is paused, don't update elapsed time
let startTime;
let deltaTime;

// FPS counter
let frameCount = 0;
let fps = 0;
let FPSLastTime = performance.now();

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

const convertedGravity = document.getElementById("convertedGravity");

function start() {
    isPaused = false;
    pauseButton.textContent = "Pause";
    finalVelocityElement.textContent = `Final Velocity: []`;

    const gravityInput = document.getElementById("gravityInput");
    // GRAVITY = parseFloat(gravityInput.value);
    // GRAVITY = parseFloat(gravityInput.value) * 0.000096402;
    GRAVITY = 0.71856 * 0.0167;  // gravity in 60 fps should be 0.012 px / frame^2
    convertedGravity.textContent = `(${GRAVITY} px/frame^2)`;

    // GRAVITY = parseFloat(gravityInput.value) * 0.00096402;

    core.reset();

    body = new Body(
        new Rect(100, 250, 50, 50, "blue"),
        (initialVel = [1, 0]),
        (initialAcc = [-0.001, 0]),
        (mass = 1),
        GRAVITY
    );
    core.addBody(body);

    startTime = Date.now();
    frameCount = 0;
    fps = 0;
    FPSLastTime = performance.now();
    previousTime = performance.now();
}

function update() {
    // FPS counter
    const currentTime = performance.now();
    deltaTime = (currentTime - previousTime) / 1000;
    previousTime = currentTime;
+
    frameCount++;

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

    UI.drawGraph();

    core.update();

    core.render(context);

    // for (const body of core.allBodies) {
    //     context.fillText(`(${body.x}, ${body.y})`, body.x + 10, body.y - 10);
    // }

    requestAnimationFrame(update);

    // FPS counter
    if (currentTime - FPSLastTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        FPSLastTime = currentTime;
        console.log(`FPS: ${fps}`);

        const fpsCounter = document.getElementById("fpsCounter");
        fpsCounter.textContent = `FPS: ${fps}`;
    }
}

start();
update();
