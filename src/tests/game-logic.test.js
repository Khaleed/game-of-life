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
  lessThanTwoNeighbours,
  twoOrThreeNeighbours,
  moreThanThreeNeighbours,
  threeNeighbours,
  nextGeneration
} from "./game-logic";

import { matrix } from "../model";

describe("isAlive", () => {
  it("checks status of a cell", () => {
    const grid = matrix(3, 3);
    expect(isAlive(grid, 1, 1)).toBeLessThan(2);
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
  it("returns coordinates of all neighbours within a given grid", () => {
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

describe("lessThanTwoNeighbours", () => {
  it("check if a live cell has less than two live neighbours", () => {
    const grid = [[1, 0, 0], [0, 1, 0], [0, 0, 0]];
    expect(lessThanTwoNeighbours(grid, 1, 1)).toBeTruthy();
  });
});

describe("twoOrThreeNeighbours", () => {
  it("check if a live cell has two or three live neighbours", () => {
    const grid = [[1, 0, 0], [0, 1, 0], [1, 0, 0]];
    expect(twoOrThreeNeighbours(grid, 1, 1)).toBeTruthy();
  });
});

describe("moreThanThreeNeighbours", () => {
  it("check if a live cell has more than three live neighbours", () => {
    const grid = [[1, 0, 1], [0, 1, 0], [1, 0, 1]];
    expect(moreThanThreeNeighbours(grid, 1, 1)).toBeTruthy();
  });
});

describe("threeNeighbours", () => {
  it("check if a dead cell has three live neighbours", () => {
    const grid = [[1, 0, 1], [0, 0, 0], [1, 0, 0]];
    expect(threeNeighbours(grid, 1, 1)).toBeTruthy();
  });
});

describe("nextGeneration", () => {
  it("returns a new grid of cells after a tick", () => {
    const grid = [[1, 0, 1], [1, 1, 1], [0, 0, 1]];
    expect(nextGeneration(grid)).toEqual([[1, 0, 1], [1, 0, 1], [0, 1, 1]]);
  });
});
