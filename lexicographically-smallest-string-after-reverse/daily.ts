function resultArray(nums: number[]): number[] {
    let arr1: number[] = [nums[0]];
    let arr2: number[] = [nums[1]];

    for (let i = 2; i < nums.length; i++) {
      arr1[arr1.length - 1] > arr2[arr2.length - 1]
        ? arr1.push(nums[i])
        : arr2.push(nums[i]);
    }

    return [...arr1, ...arr2];
};
