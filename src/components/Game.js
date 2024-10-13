import React, { useState } from "react";
import Board from "./Board";
import "./Game.css";
import HelpModal from "./HelpModal";

const ROWS = 6;
const COLS = 7;

function Game() {
  const [board, setBoard] = useState(
    Array(ROWS)
      .fill()
      .map(() => Array(COLS).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

  const toggleHelpModal = () => {
    setIsHelpModalOpen(!isHelpModalOpen);
  };

  const handleClick = (col) => {
    if (winner) return;

    const newBoard = [...board];
    for (let row = ROWS - 1; row >= 0; row--) {
      if (!newBoard[row][col]) {
        newBoard[row][col] = currentPlayer;
        setBoard(newBoard);
        checkWinner(row, col);
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        break;
      }
    }
  };

  const checkWinner = (row, col) => {
    const directions = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1],
    ];

    for (const [dx, dy] of directions) {
      let count = 1;
      for (const factor of [-1, 1]) {
        let r = row + factor * dx;
        let c = col + factor * dy;
        while (
          r >= 0 &&
          r < ROWS &&
          c >= 0 &&
          c < COLS &&
          board[r][c] === currentPlayer
        ) {
          count++;
          r += factor * dx;
          c += factor * dy;
        }
      }
      if (count >= 4) {
        setWinner(currentPlayer);
        return;
      }
    }
  };

  const resetGame = () => {
    setBoard(
      Array(ROWS)
        .fill()
        .map(() => Array(COLS).fill(null))
    );
    setCurrentPlayer("red");
    setWinner(null);
  };

  return (
    <div className="game">
      <div className="game-header">
        <h1 className="game-title">Connect-4</h1>
        <button className="help-icon" onClick={toggleHelpModal}>
          ?
        </button>
      </div>
      <Board board={board} handleClick={handleClick} />
      <div className="game-status">
        {winner ? (
          <p className="winner-info text-black">
            <span className={`winner-label player-${winner}`}>
              {winner.toUpperCase()}
            </span>
            <span className="winner-label-suffix">wins 🎉 !</span>
          </p>
        ) : (
          <p className="current-player-info text-white">
            <span className="current-player-label">Current player:</span>
            <span className={`player-${currentPlayer}`}>
              {currentPlayer.toUpperCase()}
            </span>
          </p>
        )}
      </div>
      <button className="new-game-button" onClick={resetGame}>
        New Game
      </button>
      {isHelpModalOpen && <HelpModal onClose={toggleHelpModal} />}
    </div>
  );
}

export default Game;
