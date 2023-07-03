const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const core = new Core(canvas, context);

let isPaused;
let startTime;

// FPS counter
let frameCount = 0;
let fps = 0;
let lastTime = performance.now();

let rect = new Rect(
    1, 1, 10, 10, "white"
)

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
    console.log(core.allSpaces)

    core.addBody(rect);

}

function update() {
    // FPS counter
    const currentTime = performance.now();
    frameCount++;

    if (isPaused) {
        requestAnimationFrame(update);
        return;
    }

    context.clearRect(0, 0, canvas.width, canvas.height);

    // core.update();

    core.render(context);

    requestAnimationFrame(update);

    // FPS counter
    if (currentTime - lastTime >= 1000) {
        fps = frameCount;
        frameCount = 0;
        lastTime = currentTime;

        const fpsCounter = document.getElementById("fpsCounter");
        fpsCounter.textContent = `FPS: ${fps}`;
    }
}

start();
update();
