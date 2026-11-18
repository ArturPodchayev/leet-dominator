func longestSubsequence(nums []int) int {
    dp := make([][]int, 301)
    for i := range dp {
        dp[i] = make([]int, 301)
    }
    arr := make([]bool, 301)
    ans := 0
    
    for _, num := range nums {
        for i := 300; i >= 0; i-- {
            if arr[i] {
                diff := abs(num - i)
                dp[num][diff] = max(dp[num][diff], dp[i][diff] + 1)
            }
        }
        for i := 299; i >= 0; i-- {
            dp[num][i] = max(dp[num][i], dp[num][i+1])
        }
        ans = max(ans, dp[num][0])
        arr[num] = true
    }
    return ans + 1
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
