func minChanges(s string) int {
    cnt := 0
    for i := 0; i < len(s); i += 2 {
        if s[i] != s[i + 1] {
            cnt++
        }
    } 
    return cnt
}
