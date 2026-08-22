func minimumPartition(s string, k int) int {
    var num int64
    res := 1
    for i := 0; i < len(s); i++ {
        d := int(s[i] - '0')
        if d > k {
            return -1
        }
        num = num * 10 + int64(d)
        if num > int64(k) {
            num = int64(d)
            res++
        }
    }
    return res
}
