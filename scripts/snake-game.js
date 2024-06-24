const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const size = 10;

const snake = [
    { x: 120, y: 205 },
    { x: 130, y: 205 },
]

let direction = "";

const drawSnake = () => {
    ctx.fillStyle = "#4ec79e";
    
    snake.forEach((position, index) => {
        if (index == snake.length - 1) {
            ctx.fillStyle = "#56dcad";
        }

        ctx.fillRect(position.x, position.y, size, size);
    })
}

const moveSnake = () => {
    if (!direction) return;
    const head = snake[snake.length -1]

    if (direction == "right") {
        snake.push({ x: head.x + size, y: head.y})
    }
    
    if (direction == "left") {
        snake.push({ x: head.x - size, y: head.y})
    }
    
    if (direction == "up") {
        snake.push({ x: head.x, y: head.y - size})
    }
    
    if (direction == "down") {
        snake.push({ x: head.x, y: head.y + size})
    }

    snake.shift(); //remove o último elemento
}

const gameLoop = () => {
    ctx.clearRect(0, 0, 240, 410)
    
    moveSnake();
    drawSnake();

    setTimeout(() => {
        gameLoop();
    }, 100)
}

gameLoop()

