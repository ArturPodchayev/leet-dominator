class Solution {
  func countCommas(_ n:  Int) -> Int {
    sequence(first: 1000){$0*1000}
    .prefix{$0 <= n}
    .reduce(0){r,t in r+n-t+1} 
  }
}
