import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { map, reduce, filter } from "./helpers";
import { range } from "./helpers";

// stateless child component 2
function Cell(props) {
    const className = "cell";
    return (
        <div className={ props.isAlive? className.concat(" alive") : className }
             onClick= { props.onClick }>
        </div>
    )
};

// stateless child component 1
function Grid(props) {
    return(
        <div className="grid">
        </div>
    )
};

// all state will be held in this top-level component
function Game() {
    const generations = 0; // initial seed to create generations
    const rows = range(10);
    const cols = 10;
    // refactor to take cols as arg instead of 10
    const filler = () => Array(10).fill(0);
    const matrix = map(filler);
    const initialGrid = matrix(rows);
    return (
        <div className="game-of-life">
            <h1>Conway's Game of Life</h1>
            <Grid
                rows = { rows.length }
                cols = { cols }
                initialGrid = { initialGrid }
            />
            <h2>Generation { generations } </h2>
        </div>
    )
};

ReactDOM.render(
    <Game value="hello"/>,
    document.getElementById("root")
);


