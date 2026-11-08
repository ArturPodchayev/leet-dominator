/**
 * @param {number[][]} grid
 * @return {number}
 */
var countServers = function(grid) {

    const m = grid.length;
    const n = grid[0].length;

    let count = 0;

    for(let r = 0; r<m; r++){
        let rowCount = 0;
        let firstCol = -1;

        for(let c = 0; c<n; c++){
            if(grid[r][c] === 1){
                rowCount++;
                if(rowCount === 1)
                    firstCol = c;
            }
        }

        if(rowCount === 1){
            for(let rr = 0; rr<m; rr++){
                if(rr === r) continue;
                if(grid[rr][firstCol] === 1){
                    count++;
                    break;
                }
            }
        } else {
            count+= rowCount;
        }
    }

    return count;    
};
