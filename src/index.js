import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { map, reduce, filter } from "./helpers";
import { range } from "./helpers";

function Cell(props) {
    const className = "cell";
    return (
        <div className={ props.isAlive? className.concat(" alive") : className }
             onClick= { props.onClick }>
        </div>
    )
};

function Grid(props) {
    return(
        <div className="grid">
            { props.value }
        </div>
    )
};

// all state will be held in this top-level component
function Game() {
    const generations = 0; // initial seed
    return (
        <div>
            <h1>Conway's Game of Life</h1>
            <Grid />
            <h2>Generation { generations } </h2>
        </div>
    )
}

ReactDOM.render(
    <Game value="hello"/>,
    document.getElementById("root")
);


