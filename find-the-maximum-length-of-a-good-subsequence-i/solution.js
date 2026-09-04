var maximumLength = function(nums, k) {
  const dp = new Map();

  for (let num of nums) {
    const newDp = new Map();

    for (let [val, arr] of dp.entries()) {
      for (let t = 0; t <= k; t++) {
        const length = arr[t] || 0;

        const same = (newDp.get(val) || Array(k + 1).fill(0));
        same[t] = Math.max(same[t], length + (val === num ? 1 : 0));
        newDp.set(val, same);

        if (val !== num && t + 1 <= k) {
          const diff = (newDp.get(num) || Array(k + 1).fill(0));
          diff[t + 1] = Math.max(diff[t + 1], length + 1);
          newDp.set(num, diff);
        }
      }
    }

    const start = (newDp.get(num) || Array(k + 1).fill(0));
    start[0] = Math.max(start[0], 1);
    newDp.set(num, start);

    for (let [val, arr] of newDp.entries()) {
      const old = dp.get(val) || Array(k + 1).fill(0);
      for (let t = 0; t <= k; t++) {
        old[t] = Math.max(old[t], arr[t]);
      }
      dp.set(val, old);
    }
  }

  let ans = 0;
  for (let arr of dp.values()) {
    ans = Math.max(ans, ...arr);
  }

  return ans;
};
