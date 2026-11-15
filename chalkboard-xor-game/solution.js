/**
 * @param {number[]} nums
 * @return {boolean}
 */
var xorGame = function (nums) {
    let xor = 0;

    // calculate XOR of all elements in the array nums
    for (let num of nums) {
        xor ^= num;
    }

    // if xor is zero or number of element in array nums is even then Alice wins so return true otherwise return false means Bob will wins
    return xor === 0 || nums.length % 2 === 0;
};
