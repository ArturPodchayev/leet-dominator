function findIndex(arr, value) {
    let left = 0;
    let right = arr.length;
    
    while (left < right) {
        const index = Math.floor((right + left) / 2);

        if (arr[index] > value) {
            right = index;
        } else {
            left = index + 1;
        }
    }
    return left;
}

/**
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var getResults = function (queries) {
    const blocks = [0];
    const gaps = [0];
    const result = [];

    for (let qi = 0; qi < queries.length; qi += 1) {
        const query = queries[qi];
        if (query[0] === 1) {
            const value = query[1];
            const index = findIndex(blocks, value);

            if (index === blocks.length) {
                const delta = Math.max(gaps[index - 1], value - blocks[index - 1])
                gaps.push(delta);
                blocks.splice(index, 0, value);
            } else {
                const oldDelta = blocks[index] - blocks[index - 1];
                blocks.splice(index, 0, value);

                if (oldDelta < gaps[index]) {
                    gaps.splice(index, 0, gaps[index]);
                } else {
                    const before = gaps[index - 1];
                    const delta1 = value - blocks[index - 1];
                    const delta2 = blocks[index] - value;
                    let nextDelta = Math.max(delta1, delta2);

                    if (delta1 > gaps[index - 1]) {
                        gaps.splice(index, 1, delta1, nextDelta);
                    } else {
                        gaps.splice(index, 0, Math.max(gaps[index - 1], nextDelta))
                    }

                    let max = gaps[index];
                    for (let i = index + 1; i < gaps.length && max < oldDelta; i += 1) {
                        max = Math.max(gaps[i - 1], blocks[i] - blocks[i - 1]);
                        gaps[i] = max;
                    }
                }
            }
        } else if (query[0] === 2) {
            let find = false;

            const i = findIndex(blocks, query[1]);
            if (i >= gaps.length || (blocks[i] > query[1] && gaps[i - 1] < query[2])) {
                const value = Math.max(query[1] - blocks[i - 1], gaps[i - 1]);
                result.push(value >= query[2]);
            } else {
                result.push(gaps[i] >= query[2]);
            }
        }
    }
    return result;
};
