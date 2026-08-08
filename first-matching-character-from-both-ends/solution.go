func firstMatchingIndex(s string) int {
    runes, n := []rune(s), len(s)
    for i, r := range runes {
        if r == runes[n-i-1] {
            return i
        }
    }
    
    return -1
}
