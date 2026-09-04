func maximumLength(nums []int, k int) int {
    n := len(nums)
    if n == 0 {
        return 0
    }
    dp := make([][]int, n)
    for i := range dp {
        dp[i] = make([]int, k+1)
    }
    for i := 0; i < n; i++ {
        dp[i][0] = 1
    }

    res := 1
    for j := 0; j <= k; j++ {
        max1 := 1
        numMap := make(map[int]int)
        numMap[nums[0]] = 0
        for i := 1; i < n; i++ {
            dp[i][j] = 1
            if i > 0 && j > 0 {
                max1 = max(max1, dp[i-1][j-1]+1)
            }
            dp[i][j] = max(dp[i][j], max1)
            if idx, exists := numMap[nums[i]]; exists {
                dp[i][j] = max(dp[i][j], dp[idx][j]+1)
            }
            numMap[nums[i]] = i
            res = max(res, dp[i][j])
        }
    }

    return res
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
