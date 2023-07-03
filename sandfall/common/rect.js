class Rect {
    constructor(x, y, width, height, color = "blue") {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    moveBy(x, y) {
        this.x += x;
        this.y += y;
    }

    moveTo(x, y) {
        this.x = x;
        this.y = y;
    }
}

// export { Rect };
