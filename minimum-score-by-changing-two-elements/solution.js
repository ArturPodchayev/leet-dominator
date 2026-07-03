var minimizeSum = function(nums) { 
    let arr = nums.sort((a,b) => a - b);
    let end = nums.length -1;
    
    return Math.min(nums[end-2]-nums[0], nums[end-1]-nums[1], nums[end]-nums[2]);
};
