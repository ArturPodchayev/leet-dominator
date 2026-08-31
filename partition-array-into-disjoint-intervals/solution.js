/**
 * @param {number[]} nums
 * @return {number}
 */
var partitionDisjoint = function(nums) {
    let lrMax = [] // Scan from left to right for max value and push 
    let rlMin = [] // Scan from right to left for min value and push 
    
    lrMax.push(nums[0])
    rlMin.push(nums[nums.length-1])
    
    for(let i = 1; i < nums.length; i++){
        lrMax.push(Math.max(lrMax[lrMax.length-1], nums[i]))
    }
    
    for(let i = nums.length - 2; i >= 0; i--){
        rlMin.unshift(Math.min(rlMin[0], nums[i]))
    }
    
    for(let i = 0; i < nums.length-1; i++){
        if(lrMax[i] <= rlMin[i+1]){
            return i+1
        }
    }
};
