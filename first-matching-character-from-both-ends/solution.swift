class Solution {
    func firstMatchingIndex(_ s: String) -> Int {
        let chs = Array(s)
        return chs
            .indices
            .first { chs[$0] == chs[chs.count - $0 - 1] } ?? -1
    }
}
