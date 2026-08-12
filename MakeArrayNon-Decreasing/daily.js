/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    
    let n = nums.length;        
    let map = {};


    // sliding window
    let l = 0;
    let r = 0;

    let res = 0;

    while(r < n) {

        lnum = nums[l];
        rnum = nums[r];

        //console.log(l, r, res)

        map[rnum] = (map[rnum] || 0) + 1 ;

        if(map[rnum] <= k) {
            res = Math.max(res, (r-l)+1);


            //console.log(l, r, res)

        }else {
            
            // move left pointer until map[rnum] less or equal to k
            while(map[rnum] > k) {                
                map[lnum] = (map[lnum] || 0) - 1;                
                l++;
                lnum = nums[l]
            }

        }

        // move right pointer.
        r++;
    }

    return res;

};
