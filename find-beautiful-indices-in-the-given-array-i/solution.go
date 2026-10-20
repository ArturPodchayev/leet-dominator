func beautifulIndices(s string, a string, b string, k int) (out []int) {
    // 0 <= i <= s.length - a.length
    for i := 0; i <= len(s) - len(a); i++ {
        if s[i:i + len(a)] != a {
            continue
        }
        // 0 <= j <= s.length - b.length
        // |j - i| <= k
        for j := max(0, i - k); j <= min(len(s) - len(b), i + k); j++ {
            if s[j:j + len(b)] == b {
                out = append(out, i)
                break
            }
        }
    } 

    return
}
