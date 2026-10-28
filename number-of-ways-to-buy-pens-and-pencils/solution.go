func waysToBuyPensPencils(total int, cost1 int, cost2 int) int64 {
    result := int64(0)
    
    for c1 := 0; c1 <= total; c1 += cost1 {
        result += int64((total - c1) / cost2 + 1)
    }
    
    return result
}
