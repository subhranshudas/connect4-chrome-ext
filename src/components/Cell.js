import React from "react";
import "./Cell.css";

function Cell({ value, onClick }) {
  return (
    <div className="cell" onClick={onClick}>
      {value && <div className={`piece ${value}`}></div>}
    </div>
  );
}

export default Cell;
