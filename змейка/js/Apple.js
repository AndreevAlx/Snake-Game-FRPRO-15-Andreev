

class Apple {
  constructor() {
    //цвет, размер, начальные координаты 
    this.apple = new Image();
    this.apple.src = "img/apple.png";
    this.box = 50
    this.apple = 40
    
    
    this.x = Math.floor((Math.random() * 10 + 1)) * box
    this.y = Math.floor((Math.random() * 10 + 1)) * box
  }



  draw() {
    this.ctx.drawImage(this.gameFiueld, 0, 0);
    this.ctx.drawImage(this.apple, this.x, this.y);

    for (let i = 0; i < snake.length; i++) {
        ctx.fillStyle = "green";
        ctx.fillRect(snake[i].x, snake[i].y, box, box)
        
    }
  }


  getPosition() {
    let snake = [];
    snake[0] = {
      x: 5 * box,
      y: 5 * box
   };
  }
}

const apple = new Apple();


export default Apple;