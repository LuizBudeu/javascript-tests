class Particle extends Rect {
    constructor(x, y, width, height, color = "pink") {
        super(x, y, width, height, color);
    }

    // Abstract method
    update() {
        throw new Error("You have to implement the method update");
    }
}
