class Space extends Particle {
    constructor(x, y, width, heigth, color = "white") {
        super(x, y, width, heigth, color);
    }

    update() {
        // Empty spaces don't have a behaviour
    }
}
