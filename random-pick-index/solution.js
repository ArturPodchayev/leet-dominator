/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.indexMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if(!this.indexMap.has(num)) this.indexMap.set(num, []);
        this.indexMap.get(num).push(i);
    }
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const indexes = this.indexMap.get(target);
    const length = indexes.length;
    const rand = Math.floor(Math.random() * length);

    return indexes[rand];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */
