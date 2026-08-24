func longestPalindrome(s string, t string) int {
    maxLen := 1
    for ls := 0; ls <= len(s); ls++ {
        for rs := ls; rs <= len(s); rs++ {
            for lt := 0; lt <= len(t); lt++ {
                for rt := lt; rt <= len(t); rt++ {
                    concat := s[ls:rs]+t[lt:rt]
                    if isPalindrome(concat) {
                        maxLen = max(maxLen, len(concat))
                    }
                }
            }
        }
    }
    return maxLen
}

func isPalindrome(s string) bool {
    for i, j := 0, len(s) - 1; i <=j; i, j = i+1, j-1 {
        if s[i] != s[j] {return false}
    }
    return true
}
