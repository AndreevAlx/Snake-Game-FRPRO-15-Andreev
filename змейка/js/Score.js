let score = 0;


  


class Score {
  constructor() {
    //инициализировать началое кол-во очков (0)
    this._score = score;

  }



  draw(){
    //логика отрисовки блока с очками
    this.ctx.fillStyle = "red";
    this.ctx.font = "50px Arial";
    this.ctx.fillText(this._score, this.box * 0.7, this.box * 0.9);
  }

  increasePoint(){
    //увеличение очков
    //изменение табло 
    this._score += 1;
    this.draw();
  }


  reset(){
    //сброс очков при окончании игры

    this._score = 0;
    this.draw();
    if(snakeX < this.box || snakeX > this.box * 10
      || snakeY < 1 * this.box || snakeY > this.box * 10)
      clearInterval(game);
  }
}

const score = new Score();
export default Score;