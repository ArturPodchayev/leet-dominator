class Solution {
    func minCost(_ nums: [Int], _ k: Int) -> Int {
        var n = nums.count
        var trimmed = Array(repeating: Array(repeating: 0, count: n), count: n)
        for i in 0..<n {
            var curr = 0
            var freq = Array(repeating: 0, count: n)
            for j in i..<n {
                freq[nums[j]] += 1
                if freq[nums[j]] == 2 {
                    curr += 2
                } else if freq[nums[j]] > 2 {
                    curr += 1
                }
                trimmed[i][j] = curr
            }
        }
        var dp = Array(repeating: 0, count: n+1)
        for i in 1...n {
            var min = Int.max
            for j in 0..<i {
                min = Swift.min(min, dp[j]+k+trimmed[j][i-1])
            }
            dp[i] = min
        }
        return dp[n]
    }
}
