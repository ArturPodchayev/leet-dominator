/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    if(!nums || nums.length === 0){
        return 0;
    }
    let incLength = 1; //length of current increasing subarray
    let decLength = 1; // legth of currrent decreasing subarray
    let maxLength = 1; //minimum length for a single element
    
    for(let i =1 ; i < nums.length; i ++){
        if(nums[i] < nums[i-1]){
            incLength += 1;
            decLength = 1

        }
        else if(nums[i] > nums[i-1]){
            decLength += 1;
            incLength =1;
        }
        else{
            decLength =1;
            incLength = 1;
            
        }
        maxLength = Math.max(decLength, maxLength, incLength)
        
    }
    return maxLength;  
};
