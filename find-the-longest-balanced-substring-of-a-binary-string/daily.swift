class Solution {
  func minElement(_ nums: [Int]) -> Int {
    nums.map {n in
      sequence(first:n){n in n>9 ? n/10:nil}
      .reduce(0){res,n in res+n%10}
    }.min()!
  }
}
