/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function (nums) {
    let minIndex = Infinity
    for (let i = 0; i < nums.length; i++) {
        let sum = sumOfDigit(nums[i])
        if (sum == i) {
            minIndex = Math.min(minIndex, i)
        }
    }

    return minIndex == Infinity ? -1 : minIndex
};

function sumOfDigit(num) {
    let sum = 0
    while (num != 0) {
        let mod = num % 10
        sum = sum + mod
        num = Math.floor(num / 10)
    }

    return sum
}
