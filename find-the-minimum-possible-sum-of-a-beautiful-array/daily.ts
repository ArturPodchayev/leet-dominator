function minSwaps(nums: number[]): number {

  const m = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    m.set(nums[i], i);
  }

  nums.sort((a, b) => {
    const a0 = a.toString().split('').reduce((acc, d) => acc + Number(d), 0);
    const b0 = b.toString().split('').reduce((acc, d) => acc + Number(d), 0);

    if (a0 === b0) {
      return (a < b) ? -1 : 1
    }
    return a0 - b0;

  });

  const p = Array(nums.length);

  for (let i = 0; i < nums.length; i++) {
    const v = m.get(nums[i])!;
    p[i] = v;
  }

  let cycles = 0;
  const visited = Array(nums.length).fill(false);

  for (let i = 0; i < nums.length; i++) {
    if (!visited[i]) {
      let curr = i; // begin new cycle from here
      while (!visited[curr]) {
        visited[curr] = true;
        curr = p[curr];
      }
      cycles++;
    }
  }

  const swaps = nums.length - cycles;
  return swaps;
};
