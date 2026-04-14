console.log ('hello')//get rid of space margin
document.body.style.margin =0
document.body.style.overflow ='hidden'

//resize canvas
const cnv = document.createElement ('canvas')
cnv.width = window.innerWidth
cnv.height = window.innerHeight

//attach canvas element to DOM
document.body.appendChild (cnv)

//getting context object 
const ctx = cnv.getContext ('2d')

let x_pos = -100

function drawFrame () {
    ctx.fillStyle = 'turquoise'
    ctx.fillRect (0, 0, cnv.width, cnv.height)

    ctx.fillStyle = 'hotpink'
    let x_pos = (cnv.width - 100) / 2
    ctx.fillRect (x_pos, y_pos, 100, 100)

    requestAnimationFrame (drawFrame)
    
    x_pos++

    if (x_pos > cnv.width) {
        x_pos = -100
    }
}

requestAnimationFrame (drawFrame)