/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    // k = number of bits needed to represent the largest index (n-1)
    let k = Math.floor(Math.log2(nums.length)) + 1;
    
    // kmax = bitmask with k lowest bits set (all bits "on")
    let kmax = (1 << k) - 1;
    
    // start with all bits on; will shrink as we check mismatches
    let o = kmax;
    
    for (let i = 0; i < nums.length; i++) {
        // if number is not in its correct index, mask it in
        if (nums[i] != i) {
            o &= nums[i] & o;
        }
    }

    // if nothing changed (o still equals kmax), return 0
    return o == kmax ? 0 : o;
};
// I let AI do my comments
