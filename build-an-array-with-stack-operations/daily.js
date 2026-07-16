/**
 * @param {number[]} nums
 * @return {number}
 */
var gcdSum = function(nums) {
    let prefix = [];
    let greatestNumber = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > greatestNumber) {
            greatestNumber = nums[i];
        }

        let a = nums[i];
        let b = greatestNumber;

        while (b != 0) {
            let remainder = a % b;
            a = b;
            b = remainder;
        }

        prefix.push(a)
    }

    prefix.sort((x, y) => x - y);

    let totalSum = 0;
    let frontIndex = 0;
    let backIndex = prefix.length - 1;

    while (frontIndex < backIndex) {
        let smallest = prefix[frontIndex];
        let largest = prefix[backIndex];

        while (smallest != 0) {
            let remainder2 = largest % smallest;
            largest = smallest;
            smallest = remainder2;
        }

        totalSum += largest;
        frontIndex++;
        backIndex--;
    }

    return totalSum;
};
