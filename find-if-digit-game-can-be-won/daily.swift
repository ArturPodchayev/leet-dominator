class Solution {
    func maxProduct(_ n: Int) -> Int {
        let digits = Array(String(n))
        var maxProduct = 0

    for i in 0..<digits.count {
      for j in i + 1..<digits.count {
        let first = Int(String(digits[i]))!
        let second = Int(String(digits[j]))!

        maxProduct = max(maxProduct, first * second)
        }
    }

    return maxProduct
    }
}
