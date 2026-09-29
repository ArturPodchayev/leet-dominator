function hasValidPath(grid: string[][]): boolean {
    const m = grid.length, n = grid[0].length;
    const memo = new Map<string, boolean>();

    const dfs = (i, j, balance) => {
        //out of bounds || invalid balance
        if (i >= m || j >= n || balance < 0) return false;
        
        const key = `${i},${j},${balance}`;
        if (memo.has(key)) return memo.get(key) 

        balance += grid[i][j] === '(' ? 1 : -1;
        //impossible to balance with remaining cells
        if (balance > (m - 1 - i) + (n - 1 - j)) return false;
        
        // valid path
        if (i === m - 1 && j === n - 1) {
            const res = balance === 0;
            memo.set(key, res);
            return res;
        }
        
        //right or down
        const res = dfs(i + 1, j, balance) || dfs(i, j + 1, balance);
        memo.set(key, res);
        return res;
    };
    
    return dfs(0, 0, 0);
}
