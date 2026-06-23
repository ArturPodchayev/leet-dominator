class Solution {
  func zigZagArrays(_ n: Int, _ l: Int, _ r: Int) -> Int {
    2 * (3...n).reduce(Array(1...r-l)) { dp, _ in
      dp.reversed().reductions() {($0+$1)%Int(1e9+7)}
    }.reduce(0, +) % Int(1e9+7)
  }
}
