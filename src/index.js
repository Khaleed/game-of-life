import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { map, reduce, filter, concat } from "./helpers";
import { matrix } from "../src/tests/game-logic";

// stateless child component 2
function Cell(props) {
    const cellSelection = () => props.cellSelection(props.row, props.col);
    return(
        <div className= { props.cellClass }
             id = { props.coordinate }
             onClick = { cellSelection }
        >
        </div>
    );
};

// stateless child component 1
function Grid(props) {
    const cells = [];
    props.grid.map((_, m) => props.grid[m].map((_, n) => {
        const cellClass = "cell";
        cells.concat(
            <Cell
            cellClass = { props.grid[m][n] ? cellClass.concat(" alive") : cellClass }
            coordinate = { [m, n] }
            row = { m }
            col = { n }
            cellSelection = { props.cellSelection }
            />
        );
    }));

    return(
        <div className="grid">
        { cells }
        </div>
    );
};

// all state will be held in this top-level component and propagate to child components
function Game() {
    const generation = 0;
    const rows = 3;
    const cols = 3;
    const initialGrid = matrix(rows, cols);
    return (
        <div className="game-of-life">
            <h1>Conway's Game of Life</h1>
            <Grid
                rows = { rows }
                cols = { cols }
                grid = { initialGrid }
                cellSelection = { cellSelection }
            />
            <h2>Generations { generation } </h2>
        </div>
    );
};

ReactDOM.render(
    <Game value="hello"/>,
    document.getElementById("root")
);


