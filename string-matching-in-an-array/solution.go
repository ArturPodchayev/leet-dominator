func stringMatching(words []string) []string {
    res := make([]string, 0, len(words))
    for i, w := range words {
        for j, wr := range words {
            if i != j && strings.Contains(wr, w) {
                res = append(res, w)
                break
            }
        }
    }
    return res
}
