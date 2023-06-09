


class Snake {
  constructor() {
   // размер змейки, цвет, начальная позиция
   this.snake = [];
   this.snake[0] {
     x : 5 * box,
     y : 5 * box
   };
  }
  

  death() {
    function eatTail(headSnake, arr) {
      for (let i = 0; i < arr.length; i++) {
         if(headSnake.x == arr[i].x && headSnake.y == arr[i].y)
         clearInterval(game); 
  }
  let headSnake = {
    x: snakeX,
    y: snakeY
   };
}
  update() {
    //условия изменения змейки
    let snakeX = this.snake[0].x;
    let snakeY = this.snake[0].y;

    if(snakeX == this.apple.x && snakeY == this.apple.y) {
      score++;
      this.apple = {
        this.x = Math.floor((Math.random() * 10 + 1)) * this.box
        this.y = Math.floor((Math.random() * 10 + 1)) * this.box
      };
  } else {
      this.snake.pop();
  }

  if(snakeX < this.box || snakeX > this.box * 10
      || snakeY < 1 * this.boxx || snakeY > this.box * 10)
      clearInterval(game);



  if(dir == "left") snakeX -= this.box;
  if(dir == "right") snakeX += this.box;
  if(dir == "up") snakeY -= this.box;
  if(dir == "down") snakeY += this.box;

  }

  draw() {
    //отрисовка змейки
    this.ctx.drawImage(gameFiueld, 0, 0);
    this.ctx.drawImage(apple, appleEat.x, appleEat.y);

    for (let i = 0; i < this.snake.length; i++) {
        this.ctx.fillStyle = "green";
        this.ctx.fillRect(snake[i].x, snake[i].y, this.box, this.box)
        
    }
  }

  control(){
    // логика управления змейкой, обработка кнопок
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
 }
}
}
const snake = new Snake();

export default Snake;