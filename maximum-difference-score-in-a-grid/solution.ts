function maxScore(grid: number[][]): number {
  let m = grid.length;
  let n = grid[0].length;
  let maxScore = -Infinity;
  let dp: number[][] = Array.from({ length: m }, () =>
    Array.from({ length: n },()=>-Infinity)
  );

  maxValueAt(0, 0);
  return maxScore;

  function maxValueAt(row: number, col: number): number {
    //base case

    //going out of bounds
    if (row == m || col == n) return -Infinity;

    //memoization
    if (dp[row][col] != -Infinity) return dp[row][col];

    //recursion-> we can go right or down but it don't have to be adjacent
    let item = grid[row][col];

    //max at right cell will be any one among all the cells in the right direction
    let maxRight = -Infinity;
    let maxBottom = -Infinity;

    if (row != m - 1)
      maxRight =
        grid[row + 1][col] - item + Math.max(0, maxValueAt(row + 1, col));
    if (col != n - 1)
      maxBottom =
        grid[row][col + 1] - item + Math.max(0, maxValueAt(row, col + 1));

    //max of the two directions
    let max = Math.max(maxRight, maxBottom);

    //store the result
    dp[row][col] = max;
    maxScore = Math.max(maxScore, max);
    return max;
  }
}
