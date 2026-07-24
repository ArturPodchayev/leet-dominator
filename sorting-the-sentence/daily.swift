class Solution {
  func uniqueXorTriplets(_ nums: [Int]) -> Int {
    nums.indices.reduce(into: Array(repeating: false, count: 2048)) { a, i in
      nums[i...].forEach {[x = nums[i]] y in  a[x^y] = true }
    }
    .enumerated()
    .reduce(into: Array(repeating: false, count: 2048)) { a, t in
      if t.1 { nums.forEach{n in a[t.0^n] = true}}
    }
    .count{$0}
  }
}
