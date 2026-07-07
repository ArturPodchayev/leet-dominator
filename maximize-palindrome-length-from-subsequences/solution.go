func longestPalindrome(word1 string, word2 string) int {
  word := word1+word2
  dp := make([][]int, len(word))
  for i := range dp {
    dp[i] = make([]int, len(word))
    dp[i][i] = 1
  }
  
  ans := 0
  
  for i := range word {
    for j := i-1; j >= 0; j-- {
      dp[j][i] = max(dp[j][i], dp[j+1][i])
      dp[j][i] = max(dp[j][i], dp[j][i-1])
      if word[j] == word[i] {
        dp[j][i] = max(dp[j][i], dp[j+1][i-1]+2)
        
        // only update ans if i points to char in word2 and j points to char in word1
        if i >= len(word1) && j < len(word1) {
          ans = max(ans, dp[j][i])
        }
      }
    }
  }
  
  return ans
}

func max(a, b int) int {
  if a > b {
    return a
  }
  return b
}
