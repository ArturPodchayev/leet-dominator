function maxProduct(nums: number[]): number {
   const maxi = nums.splice(nums.indexOf(Math.max(...nums)),1)[0];
   return (maxi-1)*(Math.max(...nums)-1)
};
