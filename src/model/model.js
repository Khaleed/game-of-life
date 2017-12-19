import { range, map } from "../helpers/helpers";

// matrix :: ([], Int) -> Matrix
export const matrix = (m, n) => {
  const dead = 0;
  const rows = range(m);
  const cols = () => Array(n).fill(dead);
  const grid = map(cols);
  return grid(rows);
};
