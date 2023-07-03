class Core {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.allSpaces = []
    }

    update() {
        this.allBodies.forEach((body) => {
            body.update();
        });
    }

    render() {
        this.allSpaces.forEach((body) => {
            body.draw(this.context);
        });
    }

    reset() {
        this.allBodies = [];
    }

    addBody(body) {
        this.allBodies.push(body);
    }

    removeBody(body) {
        this.allBodies = this.allBodies.filter((b) => b !== body);
    }

    createAllSpaces() {
        const pixelOffset = 1;
        const rectSize = 10;
        for(let x = pixelOffset; x + rectSize + pixelOffset <= this.canvas.width; x += rectSize + pixelOffset){
            for(let y = pixelOffset; y + rectSize + pixelOffset <= this.canvas.height; y += rectSize + pixelOffset){
                rect = new Rect(x, y, 10, 10, "white");
                this.allSpaces.push(rect);
            }
        }
    }

}
