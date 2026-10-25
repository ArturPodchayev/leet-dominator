const dfs = (grid: number[][], [x, y]: number[]): boolean => {

    grid[x][y] = 1;
    let res = true;

    if(x > 0 && grid[x-1][y] === 0)
        res = dfs(grid, [x-1, y]) && res

    if(y > 0 && grid[x][y-1] === 0)
        res = dfs(grid, [x, y-1]) && res;

    if(x < grid.length-1 && grid[x+1][y] === 0)
        res = dfs(grid, [x+1, y]) && res;

    if(y < grid[0].length-1 && grid[x][y+1] === 0)
        res = dfs(grid, [x, y+1]) && res;

    if(x === 0 || y === 0 || x === grid.length - 1 || y === grid[0].length - 1){
        return false;
    }

    return res;
}

function closedIsland(grid: number[][]): number {
    let count = 0;
    grid.forEach((row, i) => {
        row.forEach((cell, j) => {
            if(grid[i][j] === 0 && dfs(grid, [i, j])){
                count++;
            }
        });
    });

    return count;
};
