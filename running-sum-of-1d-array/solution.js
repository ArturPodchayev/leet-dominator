const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}
