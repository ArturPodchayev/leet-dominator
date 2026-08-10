class Solution {
    func winnerSquareGame(_ n: Int) -> Bool {
        
        var dp = [false, true, false, true, true, false]

        guard n >= dp.count else { return dp[n] }

        for n in dp.count...n {
            var res = false

            for m in 1..<n / 2 {
                let m = m * m
                guard m <= n else { break }
                res = res || !dp[n - m]
                guard !res else { break }
            }

            dp.append(res)
        }

        return dp[n]
    }
}
