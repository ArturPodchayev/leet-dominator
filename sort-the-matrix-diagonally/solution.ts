const diagonalSort = (mat: number[][]): number[][] => {
  const n = mat.length;
  const m = mat[0].length;

  // start at bottom-left, move to top-right
  let res = new Array(n).fill(0).map((_) => new Array(m));
  let row = n - 1;
  let col = 0;

  while (row != 0 || col != m) {
    // get nums
    let diagonalNums = [];
    let j = col;
    for (let i = row; i < n && j < m; i++, j++) {
      diagonalNums.push(mat[i][j]);
    }

    // sort
    diagonalNums.sort((a, b) => a - b);

    // place in res
    let idx = 0;
    j = col;
    for (let i = row; i < n && j < m; i++, j++) {
      res[i][j] = diagonalNums[idx++];
    }

    if (row == 0) col++; // move right, through cols
    if (row != 0) row--; // move up rows
  }

  return res;
};
