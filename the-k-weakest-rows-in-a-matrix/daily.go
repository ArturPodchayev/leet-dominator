func climbStairs(n int, costs []int) int {
    dp := make([]int, n+1)

    dp[n] = 0
    for i := n-1; i >= 0; i-- {
        r1 := math.MaxInt32
        r2 := math.MaxInt32
        r3 := math.MaxInt32

        if i+1 <= n {
            r1 = dp[i+1] + costs[i] + 1
        }

        if i+2 <= n {
            r2 = dp[i+2] + costs[i+1] + 4
        }

        if i+3 <= n {
            r3 = dp[i+3] + costs[i+2] + 9
        }

        dp[i] = Min(Min(r1, r2), r3)
    }

    return dp[0]
}

func Min(a, b int) int {
    if a < b {
        return a
    }

    return b
}
