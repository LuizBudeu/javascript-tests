// import { Rect } from "./rect.js";

class Body extends Rect {
    constructor(
        rect,
        initialVelComponents = [0, 0],
        initialAccComponents = [0, 0],
        mass = 1,
        gravity = GRAVITY
    ) {
        super(rect.x, rect.y, rect.width, rect.height, rect.color);
        [this.velX, this.velY] = initialVelComponents;
        [this.accX, this.accY] = initialAccComponents;
        this.mass = mass;
        this.gravity = gravity;

        this.isCollidingWithFloor = false;
        this.finalVelocities = [0, 0];
    }

    update() {
        this.accY += this.gravity;
        this.velY += this.accY;
        this.velX += this.accX;

        this.x += this.velX;
        this.y += this.velY;

        if (!this.isCollidingWithFloor) {
            this.finalVelocities = [this.velX, this.velY];
        }

        this.handleFloorCollision(canvas.height);

        this.updateElapsedTime();
    }

    drawWithVelocity(context) {
        this.draw(context);
        this.displayVelocity(context);
    }

    displayVelocity(context) {
        const arrowSize = 10;

        if (this.velX !== 0 || this.velY !== 0) {
            // Draw arrow line
            context.beginPath();
            context.moveTo(this.x + this.width / 2, this.y + this.height / 2);
            context.lineTo(
                this.x + this.width / 2 + this.velX * arrowSize,
                this.y + this.height / 2 + this.velY * arrowSize
            );
            context.strokeStyle = "black";
            context.lineWidth = 2;
            context.stroke();

            // Draw arrowhead
            const angle = Math.atan2(this.velY, this.velX);
            context.save();
            context.translate(
                this.x + this.width / 2 + this.velX * arrowSize,
                this.y + this.height / 2 + this.velY * arrowSize
            );
            context.rotate(angle);

            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(-arrowSize, -arrowSize / 2);
            context.lineTo(-arrowSize, arrowSize / 2);
            context.closePath();
            context.fillStyle = "black";
            context.fill();

            context.restore();
        }

        // Display velocity text
        context.font = "12px Arial";
        context.fillStyle = "black";
        context.textAlign = "center";
        context.fillText(
            `Velocity: (${this.velX.toFixed(2)}, ${this.velY.toFixed(2)})`,
            this.x + this.width / 2,
            this.y - 10
        );
    }

    checkCollision(other) {
        return (
            this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.y + this.height > other.y
        );
    }

    handleFloorCollision(floorY) {
        if (this.y + this.height >= floorY) {
            this.isCollidingWithFloor = true;

            this.velY = 0;
            this.y = floorY - this.height;

            this.setFinalVelocityText();
        }
    }

    updateElapsedTime() {
        // TODO if game is paused, don't update elapsed time
        if (!this.isCollidingWithFloor) {
            const endTime = Date.now();
            const elapsedTime = (endTime - startTime) / 1000;
            const timerElement = document.getElementById("timer");
            timerElement.textContent = `Elapsed Time: ${elapsedTime.toFixed(
                1
            )} seconds (${elapsedTime.toFixed(3)})`;
        }
    }

    setFinalVelocityText() {
        const finalVelocityElement = document.getElementById("finalVelocity");
        finalVelocityElement.textContent = `Final Velocity: [${this.finalVelocities.map(
            (v) => v.toFixed(3)
        )}]`;
    }
}

// export { Body };
