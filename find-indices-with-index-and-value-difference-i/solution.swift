class Solution {
func findIndices(_ nums: [Int], _ indexDifference: Int, _ valueDifference: Int) -> [Int] {
    var nums = nums
  var result = [-1, -1]
  for i in 0..<nums.count {
    for j in i..<nums.count {
      if abs(i-j) >= indexDifference && abs(nums[i] - nums[j]) >= valueDifference {
        result[0] = i
        result[1] = j
      }
    }
  }
  return result
}
}
