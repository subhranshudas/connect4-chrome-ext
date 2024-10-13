import React from "react";
import Cell from "./Cell";
import "./Board.css";

function Board({ board, handleClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              value={cell}
              onClick={() => handleClick(colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
