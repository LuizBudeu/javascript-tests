// import { Rect } from "./rect.js";

class Body extends Rect {
    constructor(
        x,
        y,
        width,
        height,
        color = "blue",
        velX = 0,
        velY = 0,
        accX = 0,
        accY = 0
    ) {
        super(x, y, width, height, color);
        this.velX = velX;
        this.velY = velY;
        this.accX = accX;
        this.accY = accY;
    }

    update() {
        this.accY += GRAVITY;
        this.velY += this.accY;
        this.velX += this.accX;

        this.x += this.velX;
        this.y += this.velY;
    }

    drawWithVelocity(context) {
        this.draw(context);
        this.displayVelocity(context);
    }

    displayVelocity(context) {
        const arrowSize = 10;

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
            this.vy = 0;
            this.y = floorY - this.height;
        }
    }
}

// export { Body };
