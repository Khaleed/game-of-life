import { matrix, isAlive, reproduce, isInside } from "./game-logic";
import { horizontalPoints , verticalPoints } from "./game-logic";
import { northWestDiagonalPoints, northEastDiagonalPoints } from "./game-logic";
import { neighbourhoodPoints, aliveNeighbours, lessThanTwoNeighbours } from "./game-logic";
import { twoOrThreeNeighbours, moreThanThreeNeighbours, threeNeighbours } from "./game-logic";
import { nextGeneration } from "./game-logic"; // to be implemented
import { map, reduce, filter, compose } from "../helpers";

test("check an imported function is defined", () => {
    expect(matrix(3, 3)).toBeDefined();
});

test("initialise a grid with default dead cells", () => {
    expect(matrix(3, 3)).toEqual([
        [0,0,0],
        [0,0,0],
        [0,0,0]]);
});

test("check status of a cell", () => {
    const grid = matrix(3, 3);
    expect(isAlive(grid, 1, 1)).toBeLessThan(2);
});

test("turn a dead cell into a live one", () => {
    const grid = matrix(3, 3);
    expect((reproduce(grid, 2, 2))).toEqual(1);
});

test("get horizontal points of neighbours", () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(horizontalPoints(1, 1)).toEqual([[1, 0], [1, 2]]);
});

test("get vertical points of neighbours", () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(verticalPoints(1, 1)).toEqual([[0, 1], [2, 1]]);
});

test("get top-left to bottom-right diagonal points of neighbours", () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(northWestDiagonalPoints(1, 1)).toEqual([[0, 0], [2, 2]]);
});

test("get top-right to bottom-left diagonal points of neighbours", () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(northEastDiagonalPoints(1, 1)).toEqual([[0, 2], [2, 0]]);
});

test("turn a dead cell into a live one", () => {
    const grid = matrix(3, 3);
    expect((reproduce(grid, 2, 2))).toEqual(1);
});

test("check if cell points are inside the grid", () => {
    expect((isInside(3, 3, 2, 2))).toBeTruthy();
});

test("get coordinates of all points of neighbours", () => {
    expect((neighbourhoodPoints(1, 1))).toEqual([
        [1, 0], [1, 2], [0, 1], [2, 1], [0, 0], [2, 2], [0, 2], [2, 0]
    ]);
});

test("check the number of neighbours that are alive", () => {
    const grid = matrix(3, 3);
    const newGrid = matrix(3, 3);
    newGrid[1][2] = 1; // [[0, 0, 0], [0, 0, 1], [0, 0, 0]]
    expect(aliveNeighbours(grid, 1, 1)).toEqual(0); // 0
    expect(aliveNeighbours(newGrid, 1, 1)).toEqual(1); // 1
});

test("a live cell should die if less than two neighbours are alive", () => {
    const grid = [[1, 0, 0], [0, 1, 0], [0, 0, 0]];
    expect(lessThanTwoNeighbours(grid, 1, 1)).toEqual(0);
});

test("a live cell should live if it has two or three alive neighbours", () => {
    const grid = [[1, 0, 1], [0, 1, 0], [0, 0, 0]];
    expect(twoOrThreeNeighbours(grid, 1, 1)).toEqual(1);
});

test("a live cell should die if it has more than three live neighbours", () => {
    const grid = [[1, 1, 1], [0, 1, 0], [1, 0, 0]];
    expect(moreThanThreeNeighbours(grid, 1, 1)).toEqual(0);
});

test("a dead cell should become alive if it has exactly three neighbours", () => {
    const grid = [[1, 1, 0], [0, 0, 0], [1, 0, 0]];
    expect(threeNeighbours(grid, 1, 1)).toEqual(1);
});

test("check grid after a tick", () => {
    const grid = [[1, 0, 1],
                  [1, 1, 1],
                  [0, 0, 1]];
    expect(nextGeneration(grid)).toEqual([
        [1, 0, 1],
        [1, 0, 1],
        [0, 0, 1]
    ]);
});
