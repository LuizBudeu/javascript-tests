class Core {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.allSpaces = [];
        this.MATRIX = [[]];
    }

    update() {
        // this.allBodies.forEach((body) => {
        //     body.update();
        // });
    }

    render() {
        this.allSpaces.forEach((body) => {
            body.draw(this.context);
        });
    }

    reset() {
        this.allBodies = [];
    }

    // addBody(body) {
    //     this.allBodies.push(body);
    // }

    // removeBody(body) {
    //     this.allBodies = this.allBodies.filter((b) => b !== body);
    // }

    createAllSpaces() {
        for (
            let x = pixelOffset;
            x + rectSize + pixelOffset <= this.canvas.width;
            x += rectSize + pixelOffset
        ) {
            for (
                let y = pixelOffset;
                y + rectSize + pixelOffset <= this.canvas.height;
                y += rectSize + pixelOffset
            ) {
                this.allSpaces.push(new Space(x, y, 10, 10, "white"));
            }
        }
        this.MATRIX = arrayToMatrix(this.allSpaces, N_ROWS, N_COLS);
    }
}
