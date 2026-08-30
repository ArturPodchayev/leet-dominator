/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {

    const n = nums.length;
    if(n<=2) return n;

    let minVal = Infinity;
    let maxVal = -Infinity;
    let idxMin = -1;
    let idxMax = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < minVal) {
            minVal = nums[i];
            idxMin = i;
        }

        if (nums[i] > maxVal) {
            maxVal = nums[i];
            idxMax = i;
        }
    }

    if( idxMin < idxMax){
        return Math.min( idxMax+1, n-idxMin, idxMin +1 + n-idxMax);
    }else{
        return Math.min( idxMin+1, n-idxMax, idxMax +1 + n-idxMin);
    }
    
};
