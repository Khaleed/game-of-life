import { range, map, reduce, filter, partial, compose } from "../helpers";

/*  process the entire cells based on the four rules:
    1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    2) Any live cell with two or three live neighbours lives on to the next generation.
    3) Any live cell with more than three live neighbours dies, as if by overpopulation.
    4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// matrix :: ([], Int) -> Matrix
const matrix = (m, n) => {
    const rows = range(3);
    const innerArray = () => Array(n).fill(0);
    const grid = map(innerArray);
    return grid(rows);
};

// isAlive :: (Matrix) -> Bool
const isAlive = (grid, m, n) => grid[m][n] ? 1 : 0;

// colsInRow :: (Matrix) -> []
const colsInRow = (grid, m) => grid[m];

// horizontal :: (Int, Int) -> Matrix
const horizontal = (x, y) => [[x, y - 1], [x, y + 1]];

// vertical :: (Matrix) -> Matrix
const vertical = (x, y) => [[x - 1, y], [x + 1, y]];

// NorthWestDiagonal :: (Matrix) -> Matrix
const NorthWestDiagonal = (x, y) => [[x - 1, y - 1], [x + 1, y + 1]];

// NorthEastDiagonal :: (Matrix) -> Matrix
const NorthEastDiagonal = (x, y) => [[x - 1, y + 1], [x + 1, y - 1]];

export { matrix, isAlive, colsInRow, horizontal, vertical, NorthWestDiagonal, NorthEastDiagonal }
