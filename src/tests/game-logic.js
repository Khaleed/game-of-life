import { range, map, reduce, filter, partial, compose } from "../helpers";

/*  process the entire cells based on the four rules:
    1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    2) Any live cell with two or three live neighbours lives on to the next generation.
    3) Any live cell with more than three live neighbours dies, as if by overpopulation.
    4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// matrix :: ([], Int) -> Matrix
const matrix = (m, n) => {
    const rows = range(m);
    const cols = () => Array(n).fill(0);
    const grid = map(cols);
    return grid(rows);
};

// isAlive :: (Matrix, Int, Int) -> Int
const isAlive = (grid, m, n) => grid[m][n] ? 1 : 0;

// horizontalPoints :: (Int, Int) -> Matrix
const horizontalPoints = (m, n) => [[m, n - 1], [m, n + 1]];

// verticalPoints :: (Int, Int) -> Matrix
const verticalPoints = (m, n) => [[m - 1, n], [m + 1, n]];

// northWestDiagonalPoints :: (Int, Int) -> Matrix
const northWestDiagonalPoints = (m, n) => [[m - 1, n - 1], [m + 1, n + 1]];

// northEastDiagonalPoints :: (Int, Int) -> Matrix
const northEastDiagonalPoints = (m, n) => [[m - 1, n + 1], [m + 1, n - 1]];

// reproduce :: (Matrix, Int, Int) -> Int
const reproduce = (grid, m, n) => grid[m][n] ? 1 : 1;

// isInside :: (Int, Int, Int, Int) -> Bool
const isInside = (rows, cols, m, n) => (m < rows && m >=0) && (n < cols && n >= 0);

// neighbourhoodPoints :: (Int, Int) -> Matrix
const neighbourhoodPoints = (m, n) => horizontalPoints(m, n).concat(verticalPoints(m, n), northWestDiagonalPoints(m, n), northEastDiagonalPoints(m, n));

// aliveNeighbours :: (Matrix, Int, Int) -> Int
const aliveNeighbours = (grid, m, n) => neighbourhoodPoints(m, n).filter((cellPoint) => isInside(grid.length, grid[0].length, cellPoint[0], cellPoint[1])).reduce((acc, x) => isAlive(grid, x[0], x[1]) ? acc + 1 : acc, 0);

// lessThanTwoNeighbours :: (Matrix, Int, Int) -> Int
const lessThanTwoNeighbours = (grid, m, n) => isAlive(grid, m, n) && aliveNeighbours(grid, m, n) < 2 ? 0 : 1;

// twoOrThreeNeighbours :: (Matrix, Int, Int) -> Int
const twoOrThreeNeighbours = (grid, m, n) => isAlive(grid, m, n) && [2, 3].includes(aliveNeighbours(grid, m, n)) ? 1 : 0;

// moreThanThreeNeighbours :: (Matrix, Int, Int) -> Int
const moreThanThreeNeighbours = (grid, m, n) => isAlive(grid, m, n) && aliveNeighbours(grid, m, n) > 3 ? 0 : grid[m][n];

// threeNeighbours :: (Matrix, Int, Int) -> Int
const threeNeighbours = (grid, m, n) => !isAlive(grid, m, n) && aliveNeighbours(grid, m, n) === 3 ? 1 : 0;

// // nextGeneration :: (Matrix) -> Matrix
// const nextGeneration = (grid) => grid.map((_, m) => grid[m].map((_, n) => {
//     // cells on the grid
//     const cell = [m, n];
//     // check if a living cell dies or lives or a dead cell that becomes alive on against four rules and if so return new grid
// }));

export { matrix, isAlive, horizontalPoints, verticalPoints, northWestDiagonalPoints,
         northEastDiagonalPoints, reproduce, isInside, neighbourhoodPoints, aliveNeighbours,
         lessThanTwoNeighbours, twoOrThreeNeighbours, moreThanThreeNeighbours, threeNeighbours }
