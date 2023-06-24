class Particle {
    constructor(x, y, radius, velX = 0, velY = 0, accX = 0, accY = 0) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.velX = velX;
        this.velY = velY;
        this.accX = accX;
        this.accY = accY;
    }

    draw(context) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        context.fillStyle = "blue";
        context.fill();
    }
}
