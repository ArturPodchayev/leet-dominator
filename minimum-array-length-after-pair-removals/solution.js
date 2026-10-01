/**
 * @param {number[]} nums
 * @return {number}
 */
var minLengthAfterRemovals = function(nums) {
    let length = nums.length
    let res = 0 
    let i = 0
    let j = Math.floor((length + 1)/2)
    while(i < Math.floor(length/2) && j< length){
        if(nums[i]<nums[j]){
            res += 2 
        }
        i++
        j++
    }
    return length - res 
};
