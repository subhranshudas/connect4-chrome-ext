import React from "react";
import "./HelpModal.css";

function HelpModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>How to Play Connect-4</h2>
        <div className="modal-body">
          <ol>
            <li>The game is played on a 6x7 grid.</li>
            <li>
              Two players take turns, one using red pieces and the other yellow.
            </li>
            <li>
              Click on a column to drop your piece into the lowest available
              space.
            </li>
            <li>
              The first player to connect four of their pieces in a row
              (horizontally, vertically, or diagonally) wins.
            </li>
            <li>If the grid fills up with no winner, the game is a draw.</li>
            <li>
              Anytime you want to restart the game, click on the "New Game"
              button.
            </li>
          </ol>
        </div>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default HelpModal;
