/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function(boxes) {
let n = boxes.length;
    let result = new Array(n).fill(0);
    let count = 0, moves = 0;

    // Left to Right Pass
    for (let i = 0; i < n; i++) {
        result[i] += moves;
        if (boxes[i] === '1') count++;
        moves += count;
    }

    count = 0;
    moves = 0;

    // Right to Left Pass
    for (let i = n - 1; i >= 0; i--) {
        result[i] += moves;
        if (boxes[i] === '1') count++;
        moves += count;
    }
    return result;
};
