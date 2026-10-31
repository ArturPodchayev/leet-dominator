/**
 * @param {number[]} arr
 * @param {number[]} brr
 * @param {number} k
 * @return {number}
 */
var minCost = function(a, b, k) {
    let ans1 = a.reduce((x, y, i) => x + Math.abs(y - b[i]), 0);
    a.sort((x, y) => x - y);
    b.sort((x, y) => x - y);
    return Math.min(ans1, k + a.reduce((x, y, i) => x + Math.abs(y - b[i]), 0));
};
