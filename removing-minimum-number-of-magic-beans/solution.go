func minimumRemoval(beans []int) int64 {
    n := len(beans)
    sort.Ints(beans)
    totalBeans := 0
    maximum := math.MinInt64
    
    for i, bean := range beans {
        totalBeans += bean
        maximum = max(maximum, bean * (n - i))
    }

    return int64(totalBeans - maximum)
}

func max (a, b int) int {
    if a > b {
        return a
    }
    return b
}
