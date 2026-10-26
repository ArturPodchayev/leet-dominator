function countIslands(grid: number[][], k: number): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;
  let islands = 0;

  const dfs = (row: number, col: number) => {
    if(row >= rows || col >= cols || row < 0 || col < 0) return;

    const value = grid[row][col];

    if(value === 0) {
      return;
    } else {
      count += value;
      grid[row][col] = 0; // sink it
    }

    dfs(row + 1, col);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row, col - 1);
  }


  for(let r=0; r < rows; r++) {
    for(let c=0; c<cols; c++) {
      if(grid[r][c] !== 0) {
        count = 0;
        dfs(r, c);

        if(count !== 0 && count % k === 0) {
          islands++;
        }
      }
    }
  }

  return islands;
};
