class Solution {
    func checkAlmostEquivalent(_ word1: String, _ word2: String) -> Bool {
        var freq = word1.reduce(into: [Character: Int]()) {
            $0[$1, default: 0] += 1
        }
        
        word2.forEach {
            freq[$0, default: 0] -= 1
        }
        
        return !freq.contains { (_, value) in
            abs(value) > 3
        }
    }
}
