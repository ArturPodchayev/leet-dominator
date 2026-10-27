/**
 * @param {number} m
 * @param {number} n
 * @return {string[]}
 */
function createGrid(m, n) {
    // Step 1: Initialize the grid with walls '#'
    const grid = Array.from({ length: m }, () => Array(n).fill('#'));

    // Step 2: Open up the first row
    for (let j = 0; j < n; j++) {
        grid[0][j] = '.';
    }

    // Step 3: Open up the last column
    for (let i = 0; i < m; i++) {
        grid[i][n - 1] = '.';
    }

    // Step 4: Convert 2D array to array of strings
    return grid.map(row => row.join(''));
}
