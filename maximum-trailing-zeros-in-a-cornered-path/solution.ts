function maxTrailingZeros(grid: number[][]): number {
    const rowTwoCounts = new Array(grid.length);
    const rowFiveCounts = new Array(grid.length);
    const colTwoCounts = new Array(grid[0].length);
    const colFiveCounts = new Array(grid[0].length);

    function getCount(number: number, factor: number) {
        let count = 0;

        while (number && !(number % factor)) {
            ++count;
            number /= factor;
        }

        return count;
    }

    for (let i = 0; i < grid.length; ++i) {
        rowTwoCounts[i] = new Array(grid[0].length);
        rowFiveCounts[i] = new Array(grid[0].length);

        for (let j = 0; j < grid[0].length; ++j) {
            rowTwoCounts[i][j] = (rowTwoCounts[i][j - 1] ?? 0) + getCount(grid[i][j], 2);
            rowFiveCounts[i][j] = (rowFiveCounts[i][j - 1] ?? 0) + getCount(grid[i][j], 5);
        }
    }

    for (let j = 0; j < grid[0].length; ++j) {
        colTwoCounts[j] = new Array(grid.length);
        colFiveCounts[j] = new Array(grid.length);

        for (let i = 0; i < grid.length; ++i) {
            colTwoCounts[j][i] = (colTwoCounts[j][i - 1] ?? 0) + getCount(grid[i][j], 2);
            colFiveCounts[j][i] = (colFiveCounts[j][i - 1] ?? 0) + getCount(grid[i][j], 5);
        }
    }

    let max = 0;

    for (let i = 0; i < grid.length; ++i) {
        for (let j = 0; j < grid[0].length; ++j) {
            const bottomRightCornerTwos = (
                rowTwoCounts[i][j] + (colTwoCounts[j][i - 1] ?? 0)
            );

            const bottomRightCornerFives = (
                rowFiveCounts[i][j] + (colFiveCounts[j][i - 1] ?? 0)
            );

            const bottomLeftCornerTwos = (
                rowTwoCounts[i][grid[0].length - 1] -
                (rowTwoCounts[i][j - 1] ?? 0) +
                (colTwoCounts[j][i - 1] ?? 0)
            );

            const bottomLeftCornerFives = (
                rowFiveCounts[i][grid[0].length - 1] -
                (rowFiveCounts[i][j - 1] ?? 0) +
                (colFiveCounts[j][i - 1] ?? 0)
            );

            const topLeftCornerTwos = (
                rowTwoCounts[i][grid[0].length - 1] -
                (rowTwoCounts[i][j - 1] ?? 0) +
                colTwoCounts[j][grid.length - 1] -
                colTwoCounts[j][i]
            );

            const topLeftCornerFives = (
                rowFiveCounts[i][grid[0].length - 1] -
                (rowFiveCounts[i][j - 1] ?? 0) +
                colFiveCounts[j][grid.length - 1] -
                colFiveCounts[j][i]
            );

            const topRightCornerTwos = (
                rowTwoCounts[i][j] +
                colTwoCounts[j][grid.length - 1] -
                colTwoCounts[j][i]
            );

            const topRightCornerFives = (
                rowFiveCounts[i][j] +
                colFiveCounts[j][grid.length - 1] -
                colFiveCounts[j][i]
            );

            max = Math.max(
                max,
                Math.min(bottomRightCornerTwos, bottomRightCornerFives),
                Math.min(bottomLeftCornerTwos, bottomLeftCornerFives),
                Math.min(topLeftCornerTwos, topLeftCornerFives),
                Math.min(topRightCornerTwos, topRightCornerFives)
            );
        }
    }

    return max;
};
