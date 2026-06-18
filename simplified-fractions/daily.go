const t = 720
func angleClock(hour int, minutes int) float64 {
    hr := (hour % 12) * 60 + minutes
    mn := minutes * 12
    df := abs(hr - mn)
    return float64(min(df, t - df)) / float64(2)
}
func abs(i int) int {
    if i >= 0 { return i }
    return -i
}
