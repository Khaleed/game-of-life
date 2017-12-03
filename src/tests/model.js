import { range, map } from "../helpers";

// matrix :: ([], Int) -> Matrix
export const matrix = (m, n) => {
  const rows = range(m);
  const cols = () => Array(n).fill(0);
  const grid = map(cols);
  return grid(rows);
};
