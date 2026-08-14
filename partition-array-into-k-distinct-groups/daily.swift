class Solution {
    func maximumLengthSubstring(_ s: String) -> Int {
        var result = 0
        var left = 0
        var dict = [Character: Int]()

        let chars = s.map { $0 }
        for (right, ch) in chars.enumerated() {
            dict[ch, default: 0] += 1
            while dict[ch, default: 0] > 2 {
                dict[chars[left], default: 0] -= 1
                left += 1
            }
            result = max(result, right - left + 1)
        }

        return result
    }
}
