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

    drawGraph() {
        // Draw graph axes
        context.beginPath();
        context.moveTo(5, canvas.height - 5);
        context.lineTo(5, 5);
        context.moveTo(5, canvas.height - 5);
        context.lineTo(canvas.width, canvas.height - 5);

        // Draw tick marks and labels on the x-axis
        context.font = "12px Arial"; // Set font for the labels
        context.textAlign = "center"; // Set text alignment
        context.textBaseline = "top"; // Set vertical alignment
        const tickInterval = 100; // Interval between tick marks
        for (let x = tickInterval; x <= canvas.width; x += tickInterval) {
            context.moveTo(x, canvas.height - 5);
            context.lineTo(x, canvas.height);
            context.fillText(x.toString(), x, canvas.height - 20); // Draw label below the tick mark
        }

        // Draw tick marks and labels on the y-axis
        context.font = "12px Arial"; // Set font for the labels
        context.textAlign = "right"; // Set text alignment
        context.textBaseline = "middle"; // Set vertical alignment
        for (let y = tickInterval; y <= canvas.height; y += tickInterval) {
            context.moveTo(5, y - tickInterval - 5);
            context.lineTo(0, y - tickInterval - 5);
            context.fillText(y.toString(), 30, canvas.height - y);
        }

        context.strokeStyle = "#000"; // Set axis color
        context.lineWidth = 2; // Set axis line width
        context.stroke();
    }
}
