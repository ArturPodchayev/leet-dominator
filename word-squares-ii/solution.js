/**
 * @param {string[]} words
 * @return {string[][]}
 */
var wordSquares = function(words) {
    const n = words.length;
    const result = [];

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (j === i || words[i][0] !== words[j][0]) continue;
            for (let k = 0; k < n; ++k) {
                if (k === i || k === j || words[i][3] !== words[k][0]) continue;
                for (let z = 0; z < n; ++z) {
                    if (z === i || z === j || z === k ||
                        words[z][0] !== words[j][3] ||
                        words[z][3] !== words[k][3]) continue;
                    result.push([words[i], words[j], words[k], words[z]]);
                }
            }
        }
    }

    result.sort((a, b) => {
        for (let i = 0; i < 4; ++i) {
            if (a[i] < b[i]) return -1;
            if (a[i] > b[i]) return 1;
        }
        return 0;
    });

    return result;
};
