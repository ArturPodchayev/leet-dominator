class Solution {
    func isSubstringPresent(_ s: String) -> Bool {

        guard s.count >= 2 else { return false }

        let rs = s.reversed()
        var begin = s.startIndex
        var end = s.index(begin, offsetBy: 1)

        while end != s.endIndex {
            guard !rs.contains(s[begin...end]) else { return true }

            begin = s.index(after: begin)
            end = s.index(after: end)
        }

        return false
    }
}
