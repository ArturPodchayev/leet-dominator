/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
       nums.sort((a, b) => a*a - b*b);
       let sum = 0;
       let n = nums.length;
       for(let i = 0; i < n; i++)
       {
             if(i < Math.ceil(n / 2))
             {
                    sum+= nums[n - 1 -i] * nums[n - 1 - i];
             }
             else
             {
                  sum-= nums[n - 1 - i] * nums[n - 1 - i];
             }
       }
       return sum;
};
