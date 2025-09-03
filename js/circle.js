import { ctx,canvas } from "./canvas.js";
import { galaxyColors } from "./color.js";

export class Circle {
    constructor(x, y, dx, dy, radius) {
        this.x = x,
            this.y = y,
            this.dx = dx,
            this.dy = dy,
            this.radius = radius
        this.color = galaxyColors[Math.floor(Math.random() * galaxyColors.length)];
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.shadowColor = this.color;
        ctx.shadowBlur = 8;
        ctx.strokeStyle = "rgba(255,255,0,0.5)";
        ctx.stroke();
        ctx.fill();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx
        }


        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy
        }

        this.x += this.dx
        this.y += this.dy


        this.draw()
    }
}