func shortestBeautifulSubstring(s string, k int) string {
    // find the first 1 (start of the first substring)
    l,cnt := 0,1
    for l < len(s) && s[l] == '0' { l++ }
    if l == len(s) { return "" }
    // find the k-th 1 (end of the first substring)
    r := l
    for r < len(s) && cnt < k {
        r++
        if r < len(s) && s[r] == '1' { cnt++ }
    }
    if cnt < k { return "" }
    // move to the next 1 on the left, and find the next 1 for the right
    res := s[l:r+1]
    for r < len(s) {
        if sub := s[l:r+1]; len(sub) < len(res) || (len(sub) == len(res) && sub < res) {
             res = sub 
        }
        l++
        for l < len(s) && s[l] == '0' { l++ }
        r++
        for r < len(s) && s[r] == '0' { r++ }
    }
    return res
}
