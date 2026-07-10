function sortEvenOdd(nums: number[]): number[] {
  for (let i = 2; i < nums.length; i++) {
    const key = nums[i];
    let j = i - 2;

    const is_even = i % 2 === 0;
    const is_odd = !is_even;

    while (j >= 0 && ((is_even && nums[j] > key) || (is_odd && nums[j] < key))) {
      nums[j + 2] = nums[j];
      j -= 2;
    }

    nums[j + 2] = key;
  }

  return nums;
}
