class UI {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
    }

    static updateFPSCounter(currentTime) {
        // FPS counter
        if (currentTime - lastTime >= 1000) {
            fps = frameCount;
            frameCount = 0;
            lastTime = currentTime;

            const fpsCounter = document.getElementById("fpsCounter");
            fpsCounter.textContent = `FPS: ${fps}`;
        }
    }
}
