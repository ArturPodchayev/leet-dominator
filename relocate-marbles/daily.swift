class Solution {
  func resultArray(_ nums: [Int], _ k: Int) -> [Int] {
    nums.reduce(into: (Array(repeating: 0, count: k), Array(repeating: 0, count: k))) { (s: inout ([Int], [Int]), x:Int) in
      s.0 = (0..<k).map { t in
        (0..<k).reduce(x % k == t ? 1 : 0) {(a:Int, b:Int) in 
          a + (b * x % k == t ? s.0[b] : 0)
        }
      }
      s.1 = zip(s.0,s.1).map(+)
    }.1
  }
}
