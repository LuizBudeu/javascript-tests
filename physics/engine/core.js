class Core {
    constructor(canvas, context, allBodies = []) {
        this.canvas = canvas;
        this.context = context;
        this.allBodies = allBodies;
    }

    update() {
        this.allBodies.forEach((body) => {
            body.update();
            body.handleFloorCollision(this.canvas.height);
        });
    }

    render() {
        this.allBodies.forEach((body) => {
            body.draw(this.context);
        });
    }

    addBody(body) {
        this.allBodies.push(body);
    }

    removeBody(body) {
        this.allBodies = this.allBodies.filter((b) => b !== body);
    }

    reset() {
        this.allBodies = [];
    }
}
