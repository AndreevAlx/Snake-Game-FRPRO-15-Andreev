import GameField from "./GameField";
import Snake from "./Score";
import Apple from "./Apple.js";
import Score from "./Score.js";




class Main {
  constructor() {
    this.gameField = new this.gameField();
    this.snake = new Snake();
    this.apple = new Apple();
    this.score = new Score(0);
  }
  upDate(){
    //логика обновления данных
  }

  draw() {
    // отрисовка всех частей игры
  }
}

const main = new Main();
export default Main;