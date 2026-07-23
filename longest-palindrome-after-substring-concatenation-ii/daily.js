/**
 * @param {number[]} nums
 * @return {number}
 */
var uniqueXorTriplets = function(nums) {
    const n = nums.length;

    if (n <= 2) {
        return n;
    }

    return 1 << (Math.floor(Math.log2(n)) + 1);
};
