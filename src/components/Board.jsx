import React, { useState } from "react";
import Cell from "./Cell";

import Game from "../utils/Game";
import Machine from "../utils/Machine";

const Board = () => {
  const machine = new Machine();
  const game = Game.getInstance();

  const [board, setBoard] = useState([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);

  const handleClick = (cell) => {
    if (board[cell] !== " ") {
      return alert("Esa casilla ya esta ocupada!");
    }

    const newBoard = board.map((letter, index) =>
      cell === index ? "X" : letter
    );

    setTimeout(() => {
      if (game.isWinner("X", newBoard)) {
        alert("Has Ganado!");
        setBoard(board.map(() => " "));
      } else {
        const computerPlay = machine.getMove(newBoard);

        const newBoardComputer = newBoard.map((letter, index) =>
          computerPlay === index ? "O" : letter
        );

        setTimeout(() => {
          if (game.isWinner("O", newBoardComputer)) {
            alert("Has Perdido! :'(");
            setBoard(board.map(() => " "));
          }
        }, 500);

        setBoard(newBoardComputer);
      }
    }, 500);

    setBoard(newBoard);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        width: "300px",
        height: "300px",
      }}
    >
      {board.map((letter, index) => (
        <Cell onClick={() => handleClick(index)} key={index} letter={letter} />
      ))}
    </div>
  );
};

export default Board;
