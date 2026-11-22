func checkString(s string) bool {
    flag := 0
    for _, r := range s {
        if r == 'b' {
            flag++
        } 
        if flag > 0 && r == 'a' {
            return false
        }
    }
    return true
}
