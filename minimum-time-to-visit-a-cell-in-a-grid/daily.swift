class Solution {
  func maxTotalValue(_ nums: [Int], _ k: Int) -> Int {
    (nums.max()! - nums.min()!) * k
  }
}
