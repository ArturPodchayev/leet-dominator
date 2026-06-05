class Solution {
  func totalWaviness(_ num1: Int, _ num2: Int) -> Int {
    [num1-1, num2]
    .map{n in sequence(first:n){$0>9 ? $0/10:nil}.map{$0%10}}
    .reduce(0) { res, digits in
      var memo: [Int: (count: Int, sum: Int)] = [:]
      func countWaves(_ pos: Int, _ p2: Int, _ p1: Int, _ tight: Bool) -> (count: Int, sum: Int) {
        let key = pos<<8 + p2<<4 + p1
        memo[key] = (!tight ? memo[key]:nil) ?? (0...(tight ? digits[pos] : 9)).reduce((0,0)) {r,d in
          let s = pos>0 ? countWaves(pos - 1, p1, (p1<0 && d<1) ? -1:d, tight && (d == digits[pos])):(count:1, sum:0)
          return (r.count+s.count, r.sum+s.sum + ((min(p1,p2) >= 0 && ((p2<p1 && p1>d)||(p2>p1 && p1 < d))) ? s.count:0))
        }
        return memo[key]!
      }
      return countWaves(digits.count - 1, -1, -1, true).sum - res
    }
  }
}
