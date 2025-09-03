import {ctx,canvas, addResizeListener } from './canvas.js'
import { Circle } from './circle.js'

let circleArray = []

export const initCircle = () => {
    circleArray = []
    for (let i = 0; i < 50; i++) {
        let radius = Math.random() * 3 + 1
        let x = Math.random() * (canvas.width - 2 * radius) + radius
        let y = Math.random() * (canvas.height - 2 * radius) + radius
        let dx = (Math.random() - 0.5) * 1
        let dy = (Math.random() - 0.5) * 1
        circleArray.push(new Circle(x,y,dx,dy,radius))
    }
}

const animate = () => {
    requestAnimationFrame(animate)
    ctx.clearRect(0,0,canvas.width, canvas.height)
    for(let i = 0; i < circleArray.length; i++){
        circleArray[i].update()
    }
}

addResizeListener(initCircle)
animate()