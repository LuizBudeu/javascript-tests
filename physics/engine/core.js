class Core {
    constructor(canvas, context, allBodies = []) {
        this.canvas = canvas;
        this.context = context;
        this.allBodies = allBodies;
    }

    update() {
        this.allBodies.forEach((body) => {
            body.update();
        });
    }

    render() {
        this.allBodies.forEach((body) => {
            body.drawWithVelocity(this.context);
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
