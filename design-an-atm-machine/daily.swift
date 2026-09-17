class Solution {
  func minSumOfLengths(_ arr: [Int], _ target: Int) -> Int {
    zip(0..., arr.reductions(+))
    .reduce(into: [Int](repeating: .max, count: arr.count)+[-1]) {
      [map=[Int:Int](zip(arr.reductions(0,+),(-1)...)){$1}, n=arr.count] dp, t in
      let (i,sum) = t 
      dp[i] = i>0 ? dp[i-1]:.max
      if let prev = map[sum-target] {
        dp[i] = min(dp[i], i-prev)
        if prev >= 0 && dp[prev] < .max {
          dp[n] = min(dp[n]<0 ? .max : dp[n], dp[prev] + i-prev)
        }
      } 
    }.last!
  }
}
