/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxTrailingZeros = function(grid) {
    let ans = 0
    let m = grid.length, n=grid[0].length
    
    const prefixH = new Array(m), prefixV = new Array(m)
    for (let i=0; i<m; i++) {
        prefixH[i] = new Array(n)
        prefixV[i] = new Array(n)
        for (let j=0; j<n; j++) {
            prefixH[i][j] = [0, 0]
            prefixV[i][j] = [0, 0]
        }
    }
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            let value = grid[i][j]
            while (value % 2 == 0) {
                prefixH[i][j][0] += 1
                prefixV[i][j][0] += 1
                value = value / 2
            }
            while (value % 5 == 0) {
                prefixH[i][j][1] += 1
                prefixV[i][j][1] += 1
                value = value / 5
            }
            if (i > 0) {
                prefixH[i][j][0] += prefixH[i-1][j][0]
                prefixH[i][j][1] += prefixH[i-1][j][1]
            }
            if (j > 0) {
                prefixV[i][j][0] += prefixV[i][j-1][0]
                prefixV[i][j][1] += prefixV[i][j-1][1]
            }
        }
    }
    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            const left = prefixH[i][j]
            const up = prefixV[i][j]
            const right = [0, 0]
            const down = [0, 0]
            const center = prefixH[i][j]
            
            // const lU = [0, 0], lD = [0, 0], rU = [0, 0], rD = [0, 0]
            
            if (i < m-1) {
                down[0] = prefixV[m-1][j][0] - prefixV[i][j][0]
                down[1] = prefixV[m-1][j][1] - prefixV[i][j][1]
            }
            if (i > 0) {
                center[0] -= prefixH[i-1][j][0]
                center[1] -= prefixH[i-1][j][1]
            }
            if (j < n-1) {
                right[0] = prefixH[i][n-1][0] - prefixH[i][j][0]
                right[1] = prefixH[i][n-1][1] - prefixH[i][j][1]
            }
            const lU = [
                left[0]+up[0], left[1]+up[1]
            ]
            const lD = [
                left[0]+down[0], left[1]+down[1]
            ]
            const rU = [
                right[0]+up[0], right[1]+up[1]
            ]
            const rD = [
                right[0]+down[0], right[1]+down[1]
            ]
            const maxMin = Math.max(
                    Math.min(...lU),
                    Math.min(...lD),
                    Math.min(...rU),
                    Math.min(...rD),
                    Math.min(...center)
            )
            // console.log(i, j, lU, lD, rU, rD, center, maxMin)
            ans = Math.max(ans, maxMin)
        }
    }
    // console.log('PrefixH', prefixH)
    // console.log('PrefixV', prefixV)
    
    return ans
    
};
