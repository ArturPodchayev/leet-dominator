func sumAndMultiply(n int) int64 {
    var x, s, p, m int
    p = 1
    for n > 0 {
        n, m = n / 10, n % 10
        if m > 0 {
            x += m * p
            p *= 10
            s += m
        }
    }
    return int64(x) * int64(s)
}
