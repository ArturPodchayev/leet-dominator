class Solution {
    func maxDepth(_ s: String) -> Int {
        var result = 0
        var maxValue = result
        for ch in s {
            if ch == "(" {
                maxValue += 1
                result = max(result, maxValue)
            } else if ch == ")" {
                maxValue -= 1
            }
        }
        return result
    }
}
