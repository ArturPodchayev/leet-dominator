func countCommas(n int) int {
    if n >= 1000 {
        return (n%1000)+(((n/1000)-1)*1000)+1
    }
    return 0
}
