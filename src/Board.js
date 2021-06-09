import React from "react";
import Square from "./Square";

const style = {
  border: "4px solid #66BFBF",
  borderRadius: "10px",
  boxShadow: "4px 4px 12px 0px rgba(102,191,191,0.2)",
  width: "300px",
  height: "300px",
  margin: "20px auto",
  display: "grid",
  gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

const Board = ({ winner, squares, onClick }) => (
  <div style={style}>
    {squares.map((square, i) => (
      <Square key={i} value={square} winning={winner && winner.squares.includes(i)} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
