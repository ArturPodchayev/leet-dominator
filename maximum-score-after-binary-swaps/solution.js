/**
 * @param {number[]} nums
 * @param {string} s
 * @return {number}
 */
var maximumScore = function (nums, s) {
    let n = nums.length;
    let pq = new MaxPriorityQueue();
    let sum = 0;
    for (let i = 0; i < n; i++) {
        pq.enqueue(nums[i]);
        if (s[i] === "1") {
            sum += pq.dequeue();
        }
    }
    return sum;
};
