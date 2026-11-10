class Solution {
    func climbStairs(_ n: Int, _ costs: [Int]) -> Int {
        var dp: [Int] = Array(repeating: 0, count: n + 1)
        dp[1] = costs[0] + 1
        guard n > 1 else { return dp[1] }

        for i in 2...n {
            var minVal = Int.max
            let oneJump = costs[i - 1] + ((i - (i - 1)) * (i - (i - 1)))
            let twoJump = costs[i - 1] + ((i - (i - 2)) * (i - (i - 2)))
            if i > 2 {
                let threeJump = costs[i - 1] + ((i - (i - 3)) * (i - (i - 3)))
                dp[i] = min(oneJump + dp[i - 1], twoJump + dp[i - 2], threeJump + dp[i - 3])
            } else {
                dp[i] = min(oneJump + dp[i - 1], twoJump + dp[i - 2])
            }
        }

        return dp[n]
    }
}
