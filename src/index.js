import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { matrix } from "./tests/model.js";

function Cell(props) {
  return <div className={props.cellClass} coordinate={props.coordinate} />;
}

function Grid(props) {
  const cells = [];
  for (let m = 0; m < props.grid.length; m += 1) {
    for (let n = 0; n < props.grid[m].length; n += 1) {
      const className = props.grid[m][n] ? "cell alive" : "cell";
      cells.push(
        <Cell
          cellClass={className}
          coordinate={[m, n]}
          key={[m, n]}
          row={m}
          col={n}
        />
      );
    }
  }
  return <div className="grid"> {cells}</div>;
}

function Game() {
  const initialGrid = matrix(3, 3); //=> [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  return (
    <div className="game-of-life">
      <h1>Conway's Game of Life</h1>
      <Grid grid={initialGrid} />
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
