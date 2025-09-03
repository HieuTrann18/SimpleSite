export const canvas = document.querySelector('canvas')
export const ctx = canvas.getContext('2d')

export const resizeCanvas  = (initCircle) => {
    canvas.width = innerWidth
    canvas.height = innerHeight
    if(initCircle){
        initCircle()
    }
}

export const addResizeListener = (initCircle) =>{
    window.addEventListener('resize', () => resizeCanvas(initCircle))
    window.addEventListener('DOMContentLoaded', () => resizeCanvas(initCircle))
}