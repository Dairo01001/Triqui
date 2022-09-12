import Game from "./Game";

const game = Game.getInstance();

class Machine {
  constructor() {
    this.letter = "O";
  }

  getMoveRandom = (board, list) => {
    const possibleMoves = [];
    list.forEach((num) => {
      if (board[num] === " ") {
        possibleMoves.push(num);
      }
    });

    if (possibleMoves.length !== 0) {
      return possibleMoves[Math.floor(possibleMoves.length * Math.random())];
    }

    return null;
  };

  getMove = (board) => {
    let move = null;

    board.forEach((cell, index) => {
      const copyBoard = board.map((cell) => cell);
      if (copyBoard[index] === " ") {
        copyBoard[index] = this.letter;
        if (game.isWinner(this.letter, copyBoard)) {
          move = index;
        }
      }
    });

    if (move !== null) {
      return move;
    }

    board.forEach((cell, index) => {
      const copyBoard = board.map((cell) => cell);
      if (copyBoard[index] === " ") {
        copyBoard[index] = "X";
        if (game.isWinner("X", copyBoard)) {
          move = index;
        }
      }
    });

    if (move !== null) {
      return move;
    }

    let play = this.getMoveRandom(board, [0, 2, 6, 8]);
    if(play !== null) {
        return play;
    }

    if(board[4] === " ") {
        return 4;
    }

    return this.getMoveRandom(board, [1, 3, 5, 7]);
  };
}

export default Machine;
