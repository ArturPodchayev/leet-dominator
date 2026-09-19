class Solution {
    func findWinningPlayer(_ skills: [Int], _ k: Int) -> Int {
        var winnerIdx: Int = 0, winnerCount: Int = 0
        for i in 1 ..< skills.count {
            if skills[i] > skills[winnerIdx] {
                winnerIdx = i
                winnerCount = 1
            } else {
                winnerCount += 1
            }
            if winnerCount == k {
                return winnerIdx
            }
        }
        return winnerIdx
    }
}
