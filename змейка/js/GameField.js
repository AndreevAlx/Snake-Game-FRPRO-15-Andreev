
//export default GameField;*/


/*class GameField {
  constructor() {
    this.canvas = document.getElementById("game");
    this.ctx = this.canvas.getContext('2d');
   

    this.gamefield = new Image();
    this.gamefield.src = "img/gamefield.png";
    this.field = 40;
    this.speed = 0.5;

    this.ctx.fillStyle = "red";
    this.ctx.font = "50px Arial";
    this.ctx.fillText(":", this.field * 8, this.field * 0.75);
  }


  draw() {
    this.ctx.drawImage(this.gamefield, 0, 0);
  }


}

const gameField = new GameField();
class Game {
  draw() {
    gameField.draw();
    //pipe.draw();
    //bird.draw();
    //score.draw();
  }
}

const game = new Game();

let gameStart = setInterval(game.draw, 100);



class Apple {
  constructor() {
    this.x = Math.floor((Math.random() * 10 + 1)) * this.field;
    this.y = Math.floor((Math.random() * 10 + 1)) * this.field;
    this.canvas = canvas.ctx;

    this.apple = new Image();
    this.apple.src = "img/apple.png"
  }
  appleDraw() {
    this.ctx.drawImage(this.apple, this.x, this.y);
  }
}

const apple = new Apple();

let appleStart = setInterval(apple.draw, 100);


class Snake {
    constructor() {
        this.x = 5 * this.field;
        this.y = 5 * this.field;
        this.dir = dir;
        this.snakeX = snake[0].this.x;
        this.snakeY = snake[0].this.y;
    }
    //snake.pop();

    if(snakeX == apple.x && snakeY == apple.y) {
        score++;
        this.x = Math.floor((Math.random() * 10 + 1)) * this.field;
        this.y = Math.floor((Math.random() * 10 + 1)) * this.field;
    } else {
        snake.pop();
    }

    

    if(this.dir == "left") this.snakeX -= this.field;
    if(this.dir == "right") this.snakeX += this.field;
    if(this.dir == "down") this.snakeY += this.field;
    if(this.dir == "up") this.snakeY -= this.field;


    drawSnake() {
        for (let i = 0; i < Snake.length; i++) {
            ctx.fillStyle = "green";
            ctx.fillRect(Snake[i].this.x, Snake[i].this.y, this.field, this.field); 
        }
    document.addEventListener("keydown", direction)

    function direction(e) {
    if (e.keyCode == 37 && this.dir != "right") 
        this.dir = "left";
        else if (e.keyCode == 38 && this.dir != "down")  
        this.dir = "up";
        else if (e.keyCode == 39 && this.dir != "left") 
        this.dir = "right";
        else if (e.keyCode == 40 && this.dir != "up") 
        this.dir = "down";
    }

}
}


class HeadSnake extends Snake {
    constructor(x, y, dir,snakeX, snakeY) {
        this.x = snakeX;
        this.y = snakeY;
    }
   
    snake.unshift(HeadSnake);
}

class Score {
    constructor() {
        this.score = 0;
        this.bestScore = 0;

    }
    increaseScore() {
        this.score ++;
    }

    increaseSpeed() {
        switch (score.this.score) {
            case 1:
                gameField.this.speed += 0.5;
                break;
            case 2:
                gameField.this.speed += 0.5;
                break;
            case 3:
                gameField.this.speed += 0.5;
                break;
            case 4:
                gameField.this.speed += 0.5;
                break;
            case 5:
                gameField.this.speed += 0.5;
                break;
            case 6:
                gameField.this.speed += 0.5;
                break;
            case 7:
                gameField.this.speed += 0.5;
                break;
            case 8:
                gameField.this.speed += 0.5;
                break;
            case 9:
                gameField.this.speed += 0.5;
                break;
                case 10:
            gameField.this.speed += 0.5;
                break;
        }
    }
}
*/

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const gameFiueld = new Image();
gameFiueld.src = "img/gamefield.png";

const apple = new Image();
apple.src = "img/apple.png";

let box = 50;


let score = 0;

let appleEat = {
    x: Math.floor((Math.random() * 10 + 1)) * box,
    y: Math.floor((Math.random() * 10 + 1)) * box,
};

let snake = [];
snake[0] = {
    x: 5 * box,
    y: 5 * box
};


document.addEventListener("keydown", document);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right") 
       dir = "left";
    else if(event.keyCode == 38 && dir != "down")   
       dir = "up";
    else if(event.keyCode == 39 && dir != "left")
       dir = "right";
    else if(event.keyCode == 40 && dir != "up")     
       dir = "down"; 
    
}



function eatTail(headSnake, arr) {
     for (let i = 0; i < arr.length; i++) {
        if(headSnake.x == arr[i].x && headSnake.y == arr[i].y)
        clearInterval(game);  
     }

}

function draw () {
    ctx.drawImage(gameFiueld, 0, 0);
    ctx.drawImage(apple, appleEat.x, appleEat.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
        
    }
    ctx.fillStyle = "red";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 0.7, box * 0.9);

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == appleEat.x && snakeY ==appleEat.y) {
        score++;
        appleEat = {
            x: Math.floor((Math.random() * 10 + 1)) * box,
            y: Math.floor((Math.random() * 10 + 1)) * box,
        };
    } else {
        snake.pop();
    }

    if(snakeX < box || snakeX > box * 10
        || snakeY < 1 * box || snakeY > box * 10)
        clearInterval(game);

    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;


    let headSnake = {
     x: snakeX,
     y: snakeY
    };

    eatTail(headSnake, snake);

    snake.unshift(headSnake);
}

let game = setInterval(draw, 100);









































 