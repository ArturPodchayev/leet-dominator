class Solution {
  func largestAltitude(_ gain: [Int]) -> Int {
    gain.reductions(0,+).max()!
  }
}
