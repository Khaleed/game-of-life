import { matrix, isAlive, colsInRow } from "./game-logic";
import { horizontal, vertical, NorthWestDiagonal, NorthEastDiagonal } from "./game-logic.js";
import { range, map, reduce, filter, compose } from "../helpers";

test('initialise a grid with default dead cells', () => {
    expect(matrix(3, 3)).toEqual([
        [0,0,0],
        [0,0,0],
        [0,0,0]]);
});

test('check status of a cell', () => {
    const grid = matrix(3, 3);
    expect(isAlive(grid, 1, 1)).toBeLessThan(2);
});

test('get a row', () => {
    const grid = matrix(3, 3);
    expect(colsInRow(grid, 1)).toEqual([0, 0, 0]);
});

test('is cell within grid', () => {

});

test('get horizontal neighbours', () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(horizontal(1, 1)).toEqual([[1, 0], [1, 2]]);
});

test('get vertical neighbours', () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(vertical(1, 1)).toEqual([[0, 1], [2, 1]]);
});

test('get top-left to bottom-right diagonal neighbours', () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(NorthWestDiagonal(1, 1)).toEqual([[0, 0], [2, 2]]);
});

test('get top-right to bottom-left diagonal neighbours', () => {
    // given cell is at (1, 1) in a 3 x 3 grid
    expect(NorthEastDiagonal(1, 1)).toEqual([[0, 2], [2, 0]]);
});
