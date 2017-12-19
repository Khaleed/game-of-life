import React from "react";
import { Cell } from "./cell";

function Grid(props) {
  return <div className="flex-grid">{cellsInGrid(props.grid)}</div>;

  // TODO refactor
  function cellsInGrid(grid) {
    const matrix = [];
    for (let m = 0; m < grid.length; m += 1) {
      const cells = [];
      let n;
      for (n = 0; n < grid[m].length; n += 1) {
        const className = grid[m][n] ? "cell alive" : "cell";
        const id = `cell-${m}-${n}`; // key props is a hint at which child elements may be stable across different renders
        cells.push(
          <Cell
            cellClass={className}
            coordinate={[m, n]}
            key={id}
            row={m}
            col={n}
            seed={props.seed}
          />
        );
      }
      matrix.push(
        <div className="row" key={`row-${m}`}>
          {cells}
        </div>
      );
    }
    return matrix;
  }
}

export { Grid };
