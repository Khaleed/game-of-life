import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { matrix } from "./tests/model.js";

function Cell(props) {
  return <div className={props.cellClass} coordinate={props.coordinate} />;
}

function Grid(props) {
  return <div className="flex-grid"> {cellsInGrid(props.grid)}</div>;
  function cellsInGrid(grid) {
    const matrix = [];
    for (let m = 0; m < grid.length; m += 1) {
      const cells = [];
      for (var n = 0; n < grid[m].length; n += 1) {
        const className = grid[m][n] ? "cell alive" : "cell";
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
      matrix.push(
        <div className="row" key={[m, n]}>
          {cells}
        </div>
      );
    }
    return matrix;
  }
}

function Game() {
  const initialGrid = matrix(3, 3); //=> [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  return (
    <div className="game-of-life">
      <h1> Game of Life</h1>
      <Grid grid={initialGrid} />
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
