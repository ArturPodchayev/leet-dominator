/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let a1 = [nums[0]];
    let a2 = [nums[1]];

    let last1 = nums[0];
    let last2 = nums[1];    

    for(i=2;i<nums.length;i++) {
        if(last1 > last2) {
            a1.push(nums[i])
            last1 = nums[i]
        }else {
            a2.push(nums[i])
            last2 = nums[i]
        }
    }

    return [...a1, ...a2]

};
