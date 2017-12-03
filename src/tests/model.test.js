import { matrix } from "./model";

describe("matrix", () => {
  it("is a function that takes number of rows and columns", () => {
    expect(matrix(matrix(1, 1))).toBeDefined();
  });
});

describe("matrix", () => {
  it("returns a dynamic 2-dimensional grid with dead cells", () => {
    expect(matrix(3, 3)).toEqual([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  });
});
