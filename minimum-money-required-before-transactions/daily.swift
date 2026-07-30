class Solution {
    func minimumPushes(_ word: String) -> Int {
        var result = 0
        for (index, char) in word.enumerated() {
            result += (index / 8) + 1
        }
        return result
    }
}
