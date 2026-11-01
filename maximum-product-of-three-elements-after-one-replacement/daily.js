/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
    const min = Math.min(...nums)

    return nums.reduce((acc, num) => acc + (num - min), 0)
};
