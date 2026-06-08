class Solution {
  func pivotArray(_ nums: [Int], _ pivot: Int) -> [Int] {
    Array(
      nums.reduce(into: Array(repeating:[Int](), count:3)) { a, n in 
        a[(n-pivot).signum()+1].append(n)
      }
      .joined()
    )
  }
}
