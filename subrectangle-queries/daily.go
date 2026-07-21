func maxActiveSectionsAfterTrade(s string) int {
    mx, sm, prev, curr := 0, 0, 0, 0
    for _, c := range s {
        if c == '1' {
            sm += 1
            if prev > 0 && curr > 0 {
                mx = max(mx, prev + curr)
            }
            if curr > 0 {
                prev = curr
                curr = 0
            }
        } else {
            curr += 1
        }
    }
    if prev > 0 && curr > 0 {
        mx = max(mx, prev + curr)
    }
    return mx + sm
}
