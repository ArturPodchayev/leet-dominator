const sumOfSquares = (nums: number[]): number => {
    const len: number = nums.length
    return nums.filter((num, i) => len % (i + 1) === 0).map(num => num * num).reduce((sum, cur) => sum + cur, 0)
}
