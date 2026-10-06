func minAddToMakeValid(s string) int {
    n:=len(s)
    count:=0
    open:=0
    for i:=0; i<n; i++ {
        if s[i]=='('{
            open++
        }else {
            if open==0 {
                count++
            }else {
                open--
            }
        }
    }
    return count+open
}
