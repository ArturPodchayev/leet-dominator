class Solution {
    func appendCharacters(_ s: String, _ t: String) -> Int {
        var i = t.startIndex
        for ch in s where ch == t[i] {
            i = t.index(i, offsetBy: 1)
            guard i < t.endIndex else { break }
        }
        return t.distance(from: i, to: t.endIndex)
    }
}
