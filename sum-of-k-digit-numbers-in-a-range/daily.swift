class Solution {
  func stoneGameV(_ s: [Int]) -> Int {
    s.indices.reduce(into: Array(repeating: 0, count: s.count * s.count)) { [pre = s.reductions(0,+)] dp, len in 
      s.indices.dropLast(len).forEach { i in
        dp[i*s.count+i+len] = (i..<i+len).reduce(into: 0) { res, k in
          let (l,r) = (pre[k+1]-pre[i], pre[i+len+1]-pre[k+1])
          res = max(res, l<=r ? l+dp[i*s.count+k]:0, r<=l ? r+dp[(k+1)*s.count+i+len]:0)
        }
      }
    }[s.count-1]
  }
}
