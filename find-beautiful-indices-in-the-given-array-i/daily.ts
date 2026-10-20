function sortableIntegers(nums: number[]): number {
  const n = nums.length;
  const prefDrops = new Int32Array(n);
  const nextDrop = new Int32Array(n).fill(n);

  let drops = 0;
  for (let i = 0; i < n - 1; i++) {
    if (nums[i] > nums[i + 1]) drops++;
    prefDrops[i] = drops;
  }
  prefDrops[n - 1] = drops;

  let lastDrop = n;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] > nums[i + 1]) lastDrop = i;
    nextDrop[i] = lastDrop;
  }

  const isValidK = (k: number): boolean => {
    let preMax = -Infinity;

    for (let L = 0; L < n; L += k) {
      const R = L + k - 1;

      const cDrops = R > L
        ? prefDrops[R - 1] - (L > 0 ? prefDrops[L - 1] : 0)
        : 0;

      if (cDrops > 1) return false;

      let chunkMin: number;
      let chunkMax: number;

      if (cDrops === 0) {
        chunkMin = nums[L];
        chunkMax = nums[R];
      } else {
        if (nums[R] > nums[L]) return false;
        const d = nextDrop[L];
        chunkMin = nums[d + 1];
        chunkMax = nums[d];
      }

      if (L > 0 && preMax > chunkMin) return false;
      preMax = chunkMax;
    }

    return true;
  };

  let ans = 0;

  for (let k = 1; k * k <= n; k++) {
    if (n % k === 0) {
      if (isValidK(k)) ans += k;

      if (k * k !== n) {
        const pairK = n / k;
        if (isValidK(pairK)) ans += pairK;
      }
    }
  }

  return ans;
}
