import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { matrix } from "./model";
import { nextGridGeneration } from "./update";

function Play(props) {
  return (
    <div className="play-btn">
      <button type="button" onClick={() => props.generations()}>
        Play
      </button>
    </div>
  );
}

function Cell(props) {
  return (
    <div
      className={props.cellClass}
      coordinate={props.coordinate}
      onClick={() => props.seed(props.row, props.col)}
    />
  );
}

function Grid(props) {
  return <div className="flex-grid"> {cellsInGrid(props.grid)}</div>;

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

class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      initialGrid: matrix(25, 25)
    };
  }

  seed = (m, n) => {
    const newGrid = [...this.state.initialGrid];
    newGrid[m][n] = !newGrid[m][n];
    this.setState({
      initialGrid: newGrid
    });
  };

  generations = () => {
    const newGrid = nextGridGeneration([...this.state.initialGrid]);
    this.setState({
      initialGrid: newGrid
    });
    this.tick();
  };

  tick = () => {
    const requestAnimationFrame = window.requestAnimationFrame;
    requestAnimationFrame(this.generations);
  };

  /*Returns a tree of React elements at a point in time.
     On the next update to props or state, it returns a
     different tree of React elements. React then figures out how
     to efficiently update the UI using a diffing algorithm based on heuristics.
   */
  render() {
    return (
      <div className="life">
        <h1>Game of Life</h1>
        <Grid grid={this.state.initialGrid} seed={this.seed} />
        <Play generations={this.generations} />
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));
