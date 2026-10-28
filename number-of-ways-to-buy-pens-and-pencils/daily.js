/**
 * @param {number[][]} grid
 * @return {number}
 */
var minCost = function(grid) {
    const n = grid.length;
    const m = grid[0].length;

    const mem = [];

    for(let i = 0; i < n; i++) {
        mem.push([]);

        for(let j = 0; j < m; j++) {
            mem[i].push(new Set());
        }
    }

    mem[n - 1][m - 1].add(grid[n - 1][m - 1]);

    for(let i = n - 1; i >= 0; i--) {
        for(let j = m - 1; j >= 0; j--) {
            if(j === m - 1 && i === n - 1) continue;

            const set = new Set();

            if(j + 1 < m) {
                const rightSet = mem[i][j + 1];

                for(let val of rightSet) {
                    set.add(val ^ grid[i][j]);
                }
            }

            if(i + 1 < n) {
                const bottomSet = mem[i + 1][j];

                for(let val of bottomSet) {
                    set.add(val ^ grid[i][j]);
                }
            }

            mem[i][j] = set;
        }
    }

    let min = Infinity;

    for(let val of mem[0][0]) {
        min = Math.min(min, val);
    }

    return min;
};
