/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
         nums = nums.sort((a, b) => a-b);

         let arrnum = [];
         for(let i = 0; i < nums.length; i++)
         {
                if(nums[i] === target)
                {
                        arrnum.push(i);
                }
         }
         return arrnum;
};
