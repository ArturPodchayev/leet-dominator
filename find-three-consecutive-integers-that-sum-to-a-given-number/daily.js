/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var countMajoritySubarrays = function(nums, target) {

    var n = nums.length;

    var current = [];    

    var res = 0;

    for( i=0;i<n;i++) {
        
        var cnt = 0;
        current = [];

        for( j=i;j<n;j++) {

            if(nums[j] == target) cnt++;

            

            if(cnt*2 > (j-i+1)) {
                res++;
            }
            

        }
    }



    return res;
    
};
