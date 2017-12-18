import React from "react";
import "../index.css";
import { Grid } from "./grid";
import { Play } from "./play";
import { matrix } from "../model/model";
import { nextGridGeneration } from "../update/update";

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

export default Game;
