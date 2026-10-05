class Solution {
    func scoreOfParentheses(_ s: String) -> Int {
        
        var arr = Array(s), val = 0, res = 0
        
        for i in 0 ..< arr.count {
            if arr[i] == "(" {
                val += 1
            } else {
                val -= 1
                if arr[i-1] == "(" { res += 1 << val }
            }
        }
        return res
    }
}
