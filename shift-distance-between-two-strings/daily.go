func countCommas(n int64) int64 {
    var out int64
    mult := int64(1000)

    for mult <= n {
        out += max(0, n - mult + 1)
        mult *= 1000
    }

    return out
}
