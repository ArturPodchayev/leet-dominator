class Solution {
    func smallestPalindrome(_ s: String) -> String {
        let count = s.count

        let left = String(s.prefix(count / 2).sorted())
        
        var mid = ""
        if count % 2 == 1 {
            let midIndex = s.index(s.startIndex, offsetBy: s.count / 2)
            mid = String(s[midIndex])
        }
        
        let right = String(left.reversed())

        return "\(left)\(mid)\(right)"
    }
}
