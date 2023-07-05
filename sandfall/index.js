const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const core = new Core(canvas, context);

let isPaused;
let startTime;

// FPS counter
let frameCount = 0;
let fps = 0;
let lastTime = performance.now();

const pixelOffset = 1;
const rectSize = 10;

const N_ROWS = 90;
const N_COLS = 72;

const restartButton = document.getElementById("RestartButton");
restartButton.addEventListener("click", () => {
    start();
});

const pauseButton = document.getElementById("PauseButton");
pauseButton.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseButton.textContent = isPaused ? "Unpause" : "Pause";
});

function start() {
    isPaused = false;
    pauseButton.textContent = "Pause";

    startTime = Date.now();
    frameCount = 0;
    fps = 0;
    lastTime = performance.now();

    core.reset();

    core.createAllSpaces();

    // core.MATRIX[50][50] = new Sand()  # TODO attribute particles to MATRIX indexes, not canvas positions
}

function update() {
    // FPS counter
    const currentTime = performance.now();
    frameCount++;
    UI.updateFPSCounter(currentTime);

    if (isPaused) {
        requestAnimationFrame(update);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    // core.update();

    core.render(context);

    requestAnimationFrame(update);
}

start();
update();
