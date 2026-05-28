const maxProduct = (nums, max = nums.reduce((prev, val) => [Math.max(prev[1], Math.min(prev[0], val)), Math.max(prev[0], val)], [0, 0])) => (max[0] - 1) * (max[1] - 1);
