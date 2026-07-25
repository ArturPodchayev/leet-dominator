/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canAliceWin(nums) {
    let singleSum = 0;
    let doubleSum = 0;

    for (let num of nums) {
        if (num < 10) {
            singleSum += num;
        } else {
            doubleSum += num;
        }
    }

    return singleSum !== doubleSum;
}
