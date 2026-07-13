class Solution {
  func sequentialDigits(_ low: Int,_ high: Int) -> [Int] {
    product(1...9, 1...8)
    .compactMap{ (i:Int,j:Int) in
      i+j<10 ? (j...i+j).reduce(0) {$0*10+$1} : nil
    }
    .filter { n in
      low...high ~= n
    }
  }
}
