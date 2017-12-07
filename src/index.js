import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { matrix } from "./tests/model.js";

function Cell(props) {
  return (
    <div
      className={props.cellClass}
      coordinate={props.coordinate}
      onClick={() => props.cellSelection(props.row, props.col)}
    />
  );
}

function Grid(props) {
  return <div className="flex-grid"> {cellsInGrid(props.grid)}</div>;

  // TODO refactor fn and put it in helpers dir
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
            cellSelection={props.cellSelection}
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

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      initialGrid: matrix(3, 3) //[[0, 0, 0], [0, 0, 0], [0, 0, 0]]
    };
  }

  cellSelection = (m, n) => {
    const newGrid = [...this.state.initialGrid];
    newGrid[m][n] = !newGrid[m][n];
    this.setState({
      initialGrid: newGrid
    });
  };

  render() {
    return (
      <div className="game-of-life">
        <h1>Game of Life</h1>
        <Grid
          grid={this.state.initialGrid}
          cellSelection={this.cellSelection}
        />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
