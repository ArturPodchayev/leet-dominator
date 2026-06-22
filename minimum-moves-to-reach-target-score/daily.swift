class Solution {
    func maxNumberOfBalloons(_ text: String) -> Int {
        let count = text.reduce(into: [:]) { res, ch in
            res[ch, default: 0] += 1
        }   

        return min (
            count["b", default: 0],
            count["a", default: 0],
            count["n", default: 0],
            count["l", default: 0] / 2,
            count["o", default: 0] / 2
        )
    }
}
