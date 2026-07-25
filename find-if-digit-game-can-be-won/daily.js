/**
 * @param {number} n
 * @return {number}
 */
var maxProduct = function(n) {
    return n.toString().split("").sort((a, b) => b - a).slice(0, 2).reduce((a, x) => a * x, 1);
};
