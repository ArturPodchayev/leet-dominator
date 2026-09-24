function digit(n: number):number {
  let figures = "" + n
  let sum = 0

  for (let i = 0; i < figures.length; i++)
    sum += +figures[i]

  return sum
}

function smallestIndex(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    if(i === digit(nums[i])) {
      return i
    }
  }
  return -1
}
