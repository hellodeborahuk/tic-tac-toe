import React, { useState } from "react";
import { calculateWinner } from "./Helpers";
import Board from "./Board";
import "./Game.css";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "0";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const renderMoves = () => (
       <button className="start-btn" onClick={() => setBoard(Array(9).fill(null))}>Start Game</button>
  );

  return (
    <>
    <h1 className="header">Tic Tac Toe</h1>
      <Board winner={winner} squares={board} onClick={handleClick} />
      <div className="next-player"> 
      <p>
          {winner ? "The winner is " + winner.player : "The next player is " + (xIsNext ? "X" : "0")}
      </p>
      {renderMoves()}
      </div>
    </>
  );
};

export default Game;
