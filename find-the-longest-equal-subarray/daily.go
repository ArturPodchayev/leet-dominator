func maxDepthAfterSplit(seq string) []int {
    n := len(seq)
    depth := 0
    maxDepth := 0
    for _, ch := range seq {
        if ch == '(' {
            depth++
            maxDepth = max(maxDepth, depth)
        } else {
            depth--
        }
    }
    out := make([]int, n)
    if maxDepth == 1 {
        return out
    }
    lim := maxDepth / 2
    for i, ch := range seq {
        if ch == '(' {
            depth++
        } else {
            depth--
        }
        if depth > lim {
            out[i] = 1
        }
        if depth == lim && i > 0 && i < n-1 && out[i-1] == 1 {
            out[i] = 1
        }
    }

    return out
}
