class Game {
  constructor() {
    this.winningPositions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [6, 4, 2],
      [0, 4, 8],
    ];
  }

  static getInstance() {
    if (!Game.instance) {
      Game.instance = new Game();
    }

    return Game.instance;
  }

  isWinner = (letter, board) => {
    let isWin = false;
    this.winningPositions.forEach((cells) => {
      if (
        board[cells[0]] === letter &&
        board[cells[1]] === letter &&
        board[cells[2]] === letter
      ) {
        isWin = true;
      }
    });
    return isWin;
  };

  isComplete = (board) => {
    let flag = true;
    for (let index = 0; index < board.length; index++) {
      if (board[index] === " ") {
        flag = false;
      }
    }
    return flag;
  };
}

export default Game;
