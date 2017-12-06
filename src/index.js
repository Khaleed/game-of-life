import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { matrix } from "./tests/model.js";

function Cell(props) {
  return (
    <div
      className={props.cellClass}
      coordinate={props.coordinate}
      onClick={props.alert}
    />
  );
}

function Grid(props) {
  return <div className="flex-grid"> {cellsInGrid(props.grid)}</div>;
  // helper
  function cellsInGrid(grid) {
    const matrix = [];
    for (let m = 0; m < grid.length; m += 1) {
      const cells = [];
      let n;
      for (n = 0; n < grid[m].length; n += 1) {
        const className = grid[m][n] ? "cell alive" : "cell";
        const id = `cell-${m}-${n}`;
        cells.push(
          <Cell
            cellClass={className}
            coordinate={[m, n]}
            key={id}
            row={m}
            col={n}
            alert={props.alert}
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
  const handleClick = () => alert("I can be clicked"); // testing handling of events
  return (
    <div className="game-of-life">
      <h1> Game of Life</h1>
      <Grid grid={initialGrid} alert={handleClick} />
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById("root"));
