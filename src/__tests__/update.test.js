import {
  isAlive,
  isInside,
  horizontalPoints,
  verticalPoints,
  northWestDiagonalPoints,
  northEastDiagonalPoints,
  neighbourhoodPoints,
  neighboursWithin,
  aliveNeighbours,
  nextCellGeneration,
  nextRowGeneration,
  nextGridGeneration
} from "../update/update";

import { matrix } from "../model/model";

describe("isAlive", () => {
  it("checks status of a cell", () => {
    const grid = matrix(3, 3);
    expect(isAlive(grid, 1, 1)).toBeFalsy();
  });
});

describe("horizontalPoints", () => {
  it("returns points horizontal to the provided point", () => {
    expect(horizontalPoints(1, 1)).toEqual([[1, 0], [1, 2]]);
  });
});

describe("verticalPoints", () => {
  it("returns points vertical to the provided point", () => {
    expect(verticalPoints(1, 1)).toEqual([[0, 1], [2, 1]]);
  });
});

describe("northWestDiagonalPoints", () => {
  it("returns points diagonal from top-left to bottom-right to the provided point", () => {
    expect(northWestDiagonalPoints(1, 1)).toEqual([[0, 0], [2, 2]]);
  });
});

describe("northEastDiagonalPoints", () => {
  it("returns points diagonal from top-right to bottom-left to the provided point", () => {
    expect(northEastDiagonalPoints(1, 1)).toEqual([[0, 2], [2, 0]]);
  });
});

describe("isInside", () => {
  it("checks if a provided point is inside a grid", () => {
    expect(isInside(3, 3, 2, 2)).toBeTruthy();
  });
});

describe("neighbourhoodPoints", () => {
  it("returns points of all neighbours of a provided point", () => {
    expect(neighbourhoodPoints(1, 1)).toEqual([
      [1, 0],
      [1, 2],
      [0, 1],
      [2, 1],
      [0, 0],
      [2, 2],
      [0, 2],
      [2, 0]
    ]);
  });
});

describe("neighboursWithin", () => {
  it("returns coordinates of all neighbours of a provided cell within a given grid", () => {
    const grid = [[0, 0], [0, 0]];
    expect(neighboursWithin(grid, 0, 0)).toEqual([[0, 1], [1, 0], [1, 1]]);
  });
});

describe("aliveNeighbours", () => {
  it("returns total of live neighbours given a particular cell coordinate", () => {
    const grid = matrix(3, 3);
    const newGrid = matrix(3, 3);
    newGrid[1][2] = 1; // [[0, 0, 0], [0, 0, 1], [0, 0, 0]]
    expect(aliveNeighbours(grid, 1, 1)).toEqual(0); // 0
    expect(aliveNeighbours(newGrid, 1, 1)).toEqual(1); // 1
  });
});

describe("nextCellGeneration", () => {
  it("checks that a live cell with two neighbours returns 1", () => {
    const grid = [[1, 1, 0], [1, 0, 0], [0, 0, 0]];
    expect(nextCellGeneration(grid, 0, 0)).toEqual(1);
  });
  it("checks that a live cell with three live neighbours returns 1", () => {
    const grid = [[1, 1, 0], [0, 1, 1], [0, 0, 0]];
    expect(nextCellGeneration(grid, 0, 1)).toEqual(1);
  });
  it("checks that a dead cell with three live neighbours returns 1", () => {
    const grid = [[1, 1, 0], [0, 0, 1], [0, 0, 0]];
    expect(nextCellGeneration(grid, 1, 1)).toEqual(1);
  });
  it("checks that a live cell with less than two live neighbours returns 0", () => {
    const grid = [[1, 0, 0], [0, 1, 0], [0, 0, 0]];
    expect(nextCellGeneration(grid, 1, 1)).toEqual(0);
  });
  it("checks that a live cell with more than three live neighbours returns 0", () => {
    const grid = [[1, 1, 0], [0, 1, 1], [0, 1, 1]];
    expect(nextCellGeneration(grid, 1, 2)).toEqual(0);
  });
});

describe("nextRowGeneration", () => {
  it("returns a new row of cells after a tick", () => {
    const grid = [[1, 0, 1], [1, 1, 1], [0, 0, 1]];
    expect(nextRowGeneration(grid, 1)).toEqual([1, 0, 1]);
  });
});

describe("nextGridGeneration", () => {
  it("returns a new grid of cells after a tick", () => {
    const grid = [[1, 0, 1], [1, 1, 1], [0, 0, 1]];
    expect(nextGridGeneration(grid)).toEqual([[1, 0, 1], [1, 0, 1], [0, 0, 1]]);
  });
});
