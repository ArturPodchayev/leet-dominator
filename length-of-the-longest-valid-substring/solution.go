func longestValidSubstring(word string, forbidden []string) int {
	forbiddenSet := make(map[string]bool)
	for _, s := range forbidden {
		forbiddenSet[s] = true
	}

	res := 0
	left, right := 0, 0
    n := len(word)
    for right <= n {
        for k := right; k >= max(left, right - 10); k-- {
            if forbiddenSet[word[k : right]] {
                left = k + 1
                break
            }
        }
        res = max(res, right - left)
        right++
    }
    return res
}
