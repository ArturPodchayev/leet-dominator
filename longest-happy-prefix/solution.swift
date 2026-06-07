class Solution {
    func longestPrefix(_ s: String) -> String {
        let chars = Array(s)
        let n = chars.count
        guard n > 1 else { return "" }

        var lps = Array(repeating: 0, count: n)
        var len = 0
        var i = 1

        while i < n { 
            if chars[i] == chars[len] { 
                len += 1
                lps[i] = len
                i += 1
            } else if len > 0 { 
                len = lps[len - 1]
            } else { 
                i += 1
            }
        }

        let prefixLen = lps[n - 1]
        return prefixLen == 0 ? "" : String(chars[0..<prefixLen])
    }
}
