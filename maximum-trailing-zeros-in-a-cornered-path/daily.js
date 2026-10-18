/**
 * @param {number[]} nums
 * @return {number}
 */
function numOfWays(nums) {
  const mod = BigInt(10 ** 9 + 7);
  
  function helper(nums) {
    const n = nums.length;
    if (n <= 1) {
      return BigInt(n);
    }
    
    const left = [];
    const right = [];
    const pivot = nums[0];
    
    for (let i = 1; i < n; i++) {
      if (nums[i] < pivot) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
    
    const Left = helper(left);
    const Right = helper(right);
    
    if (Left === 0n || Right === 0n) {
      return Left + Right;
    }
    
    const ans = binomialCoefficient(left.length + right.length, right.length);
    return ans * Left * Right % mod;
  }
  
  return (helper(nums) - 1n) % mod;
}

function binomialCoefficient(n, k) {
  if (k < 0 || k > n) {
    return 0n;
  }
  
  if (k === 0 || k === n) {
    return 1n;
  }
  
  let res = 1n;
  for (let i = 0; i < k; i++) {
    res = res * BigInt(n - i) / BigInt(i + 1);
  }
  
  return res;
}
