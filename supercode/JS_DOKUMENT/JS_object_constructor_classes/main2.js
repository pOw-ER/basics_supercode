const container = document.getElementById('container')
const containerWidth = 600
const paddleWidth = 100
let initialPosition = (containerWidth - paddleWidth) / 2
//[[top,left],[top,left],.....,]

let coordinates = [
    [1, 1], [1, 101], [1, 201], [1, 301], [1, 401], [1, 501],
    [31, 1], [31, 101], [31, 201], [31, 301], [31, 401], [31, 501],
    [61, 1], [61, 101], [61, 201], [61, 301], [61, 401], [61, 501],
]

coordinates.forEach(block => {
    let div = document.createElement('div')
    div.classList.add('block')
    div.style.top = block[0] + "px"
    div.style.left = block[1] + "px"
    container.appendChild(div)
})

//draw paddle
function drawPaddle() {
    let paddle = document.createElement('div')
    paddle.classList.add('paddle')
    paddle.style.bottom = 5 + "px"
    paddle.style.left = initialPosition + "px"
    container.appendChild(paddle)
}

drawPaddle()

function movePaddle() {
    document.body.addEventListener('keydown', (e) => {
        console.log(e);
        if (e.code == "ArrowRight") {
            console.log('right');
            if (initialPosition < containerWidth - paddleWidth) {
                initialPosition += 10
                console.log(document.querySelector('.paddle'))
                document.querySelector('.paddle').style.left = initialPosition + "px"
            }
        } else if (e.code == "ArrowLeft") {
            console.log('left');
            if (initialPosition > 0) {
                initialPosition -= 10
                console.log(document.querySelector('.paddle'))
                document.querySelector('.paddle').style.left = initialPosition + "px"
            }
        }
    })
}
movePaddle()