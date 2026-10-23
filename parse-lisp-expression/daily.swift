class Solution {
  func sortPermutation(_ nums: [Int]) -> Int {
    zip(0...,nums).allSatisfy(==) 
    ? 0
    : zip(0...,nums).filter(!=).map(\.1).reduce(Int.max, &)
  }
}
