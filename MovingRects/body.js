// import { Rect } from "./rect.js"; 


class Body extends Rect {
    constructor(x, y, width, height, color, velocityX = 0, velocityY = 0) {
        super(x, y, width, height, color);
        this.velocityX = velocityX;
        this.velocityY = velocityY;
    }

    // showVelocity(context) {
    //     context.font = "12px Arial";
    // context.fillStyle = "black";
    // context.textAlign = "center";
    // context.fillText(
    //   `Velocity: (${this.velocityX.toFixed(2)}, ${this.velocityY.toFixed(2)})`,
    //   this.x + this.width / 2,
    //   this.y - 10
    // );
    // }

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
          this.x + this.width / 2 + this.velocityX * arrowSize,
          this.y + this.height / 2 + this.velocityY * arrowSize
        );
        context.strokeStyle = "black";
        context.lineWidth = 2;
        context.stroke();
    
        // Draw arrowhead
        const angle = Math.atan2(this.velocityY, this.velocityX);
        context.save();
        context.translate(
          this.x + this.width / 2 + this.velocityX * arrowSize,
          this.y + this.height / 2 + this.velocityY * arrowSize
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
          `Velocity: (${this.velocityX.toFixed(2)}, ${this.velocityY.toFixed(2)})`,
          this.x + this.width / 2,
          this.y - 10
        );
      }
}

// export { Body };