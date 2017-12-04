/*  process the entire cells based on the four rules:
    1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
    2) Any live cell with two or three live neighbours lives on to the next generation.
    3) Any live cell with more than three live neighbours dies, as if by overpopulation.
    4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
*/

// isAlive :: (Matrix, Int, Int) -> Int
const isAlive = (grid, m, n) => (grid[m][n] ? 1 : 0);

// horizontalPoints :: (Int, Int) -> Matrix
const horizontalPoints = (m, n) => [[m, n - 1], [m, n + 1]];

// verticalPoints :: (Int, Int) -> Matrix
const verticalPoints = (m, n) => [[m - 1, n], [m + 1, n]];

// northWestDiagonalPoints :: (Int, Int) -> Matrix
const northWestDiagonalPoints = (m, n) => [[m - 1, n - 1], [m + 1, n + 1]];

// northEastDiagonalPoints :: (Int, Int) -> Matrix
const northEastDiagonalPoints = (m, n) => [[m - 1, n + 1], [m + 1, n - 1]];

// isInside :: (Int, Int, Int, Int) -> Bool
const isInside = (ms, ns, m, n) => m < ms && m >= 0 && (n < ns && n >= 0);

// neighbourhoodPoints :: (Int, Int) -> Matrix
const neighbourhoodPoints = (m, n) =>
  horizontalPoints(m, n).concat(
    verticalPoints(m, n),
    northWestDiagonalPoints(m, n),
    northEastDiagonalPoints(m, n)
  );

// neighboursWithin :: (Int, Int) -> Matrix
const neighboursWithin = (grid, m, n) =>
  neighbourhoodPoints(m, n).filter(cellCoordinate =>
    isInside(grid.length, grid[0].length, cellCoordinate[0], cellCoordinate[1])
  );

// aliveNeighbours :: (Matrix, Int, Int) -> Int
const aliveNeighbours = (grid, m, n) =>
  neighboursWithin(grid, m, n).reduce(
    (acc, x) => (isAlive(grid, x[0], x[1]) ? acc + 1 : acc),
    0
  );

// lessThanTwoNeighbours :: (Matrix, Int, Int) -> Bool
const lessThanTwoNeighbours = (grid, m, n) =>
  isAlive(grid, m, n) && aliveNeighbours(grid, m, n) < 2;

// twoOrThreeNeighbours :: (Matrix, Int, Int) -> Int
const twoOrThreeNeighbours = (grid, m, n) =>
  isAlive(grid, m, n) && [2, 3].includes(aliveNeighbours(grid, m, n));

// moreThanThreeNeighbours :: (Matrix, Int, Int) -> Int
const moreThanThreeNeighbours = (grid, m, n) =>
  isAlive(grid, m, n) && aliveNeighbours(grid, m, n) > 3;

// threeNeighbours :: (Matrix, Int, Int) -> Int
const threeNeighbours = (grid, m, n) =>
  !isAlive(grid, m, n) && aliveNeighbours(grid, m, n) === 3;

// nextGeneration :: (Matrix) -> Matrix
const nextGeneration = grid => {
  for (let m = 0; m < grid.length; m += 1) {
    for (let n = 0; n < grid[m].length; n += 1) {
      if (
        lessThanTwoNeighbours(grid, m, n) ||
        moreThanThreeNeighbours(grid, m, n)
      ) {
        grid[m][n] = 0;
      } else if (
        moreThanThreeNeighbours(grid, m, n) ||
        threeNeighbours(grid, m, n)
      ) {
        grid[m][n] = 1;
      }
    }
  }
  return grid;
};

export {
  isAlive,
  horizontalPoints,
  verticalPoints,
  northWestDiagonalPoints,
  northEastDiagonalPoints,
  isInside,
  neighbourhoodPoints,
  neighboursWithin,
  aliveNeighbours,
  lessThanTwoNeighbours,
  twoOrThreeNeighbours,
  moreThanThreeNeighbours,
  threeNeighbours,
  nextGeneration
};
