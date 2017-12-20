import React from "react";
import "../index.css";
import { Grid } from "./grid";
import { Play, Stop, Clear, Randomise } from "./controls";
import { matrix } from "../model/model";
import { nextGridGeneration } from "../update/update";
import { randomBetween } from "../helpers/helpers";

class Game extends React.PureComponent {
  constructor() {
    super();
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
    this.intervalID = requestAnimationFrame(this.generations);
  };

  stop = () => {
    cancelAnimationFrame(this.intervalID);
  };

  clear = () => {
    this.setState({
      initialGrid: matrix(25, 25)
    });
  };

  randomise = () => {
    const newGrid = [...this.state.initialGrid];
    return newGrid.map((_, m) =>
      newGrid[m].map((_, n) => {
        if (randomBetween(1, 3) === 1) {
          newGrid[m][n] = 1;
        } else {
          newGrid[m][n] = this.state.initialGrid[m][n];
        }
        return this.setState({
          initialGrid: newGrid
        });
      })
    );
  };

  /*   Returns a tree of React elements at a point in time.
       On the next update to props or state, it returns a
       different tree of React elements. React then figures out how
       to efficiently update the UI using a diffing algorithm based on heuristics.
  */
  render() {
    return (
      <div className="life">
        <h1>Game of Life</h1>
        <Grid grid={this.state.initialGrid} seed={this.seed} />
        <div className="controller">
          <Play generations={this.generations} />
          <Stop stop={this.stop} />
          <Clear clear={this.clear} />
          <Randomise random={this.randomise} />
        </div>
      </div>
    );
  }
}

export default Game;
