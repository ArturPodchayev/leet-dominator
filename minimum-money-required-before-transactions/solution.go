func minimumMoney(transactions [][]int) int64 {
    base, extra := 0, 0
    for _, t := range transactions {
        if t[0] > t[1] {
            base += t[0] - t[1]
            extra = max(extra, t[1])
        } else {
            extra = max(extra, t[0])
        }
    }
    return int64(base + extra)
}

func max(a, b int) int {
    if a > b { return a }
    return b
}
