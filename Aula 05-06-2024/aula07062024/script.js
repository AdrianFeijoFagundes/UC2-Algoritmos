const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); // fornece os métodos e propriedades necessários para desenhar e manipular gráficos 2d

// Váriaveis do jogo


const tileSize = 20; // Tamanho do Tile
let snake = [{x:10, y:10}] // Inicializa a cobrinha com 1 quadradinho

let dx = 0; // direção horizontal
let dy = 0; // direção vertical
let food = {x: 15, y:15 }
let gameOver = false
let paused = false

function drawSnake() {
    ctx.fillStyle = '#00ff08'
    snake.forEach(segment => {
        ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize)
    })
}

function drawFood() {
    ctx.fillStyle = '#f00'
    ctx.fillRect(food.x * tileSize, food.y * tileSize, tileSize, tileSize)
}
function generateFood() {
    food.x = Math.floor(Math.random() * canvas.width / tileSize);
    food.y = Math.floor(Math.random() * canvas.height / tileSize); // para calcular de acordo com o tamanho do TileSize
}
function checkCollision() {
    const head = snake[0];
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && snake[i].y === head.y) {
            return true;
        }
        return head.x < 0 || head.x >= canvas.width / tileSize || head.y < 0 || head.y >= canvas.height / tileSize;
    }   
}
function moveSnake() {
    if (!paused) {
        const head = { x: snake[0].x + dx, y: snake[0].y + dy};
        snake.unshift(head)
        if (head.x === food.x && head.y === food.y) {
            generateFood();
        } else {
            snake.pop();
        }
        if (checkCollision()) {
            gameOver = true;
            setTimeout(() => {
                location.reload();
            }, 5000)
        }
    }
}
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, window.height)
}

function update() {
    clearCanvas();
    drawFood();
    drawSnake();
    moveSnake();
    if (!gameOver) {
        setTimeout(update, 100); //Cana a função novamente após 100ms
    } else {
        ctx.fillStyle = '#ffff';
        ctx.font = '30px Arial';
        ctx.fillText('Game Over', canvas.width / 2 - 80, canvas.height / 2);
    }
}

function main() {
    update()
}


document.addEventListener('keydown', e => {
    if (!gameOver && !paused) {
        switch (e.key) {
            case 'ArrowUp':
                if(dy === 0) {
                    dx = 0
                    dy = -1
                }
                break
            case 'ArrowDown':
                if(dy === 0) {
                    dx = 0
                    dy = 1
                }
                break    
            case 'ArrowLeft':
                if(dx === 0) {
                    dx = -1
                    dy = 0
                }
                break
            case 'ArrowRight':
                if(dx === 0) {
                    dx = 1
                    dy = 0
                }
                break
                
        }
    }

    const pauseButton = document.getElementById('pauseButton');
    pauseButton.addEventListener('click', () => {
        paused = !paused
        pauseButton.textContent = paused ? 'Resume' : 'Pause';
    })
})
main()