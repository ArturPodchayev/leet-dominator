func firstPalindrome(words []string) string {
    for _, w := range words {
        if isPalindrom(w) {
            return w
        }
    }
    return ""
}

func isPalindrom(s string) bool {
    l, r := 0, len(s)-1
    for l < r {
        if s[l] != s[r] {
            return false
        }
        l++
        r--
    }
    return true
}
