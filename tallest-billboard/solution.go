func tallestBillboard(rods []int) int {
    dp := make(map[int]int)
    dp[0] = 0

    for _, rod := range rods {
        newDp := make(map[int]int)
        for diff, taller := range dp {
            smaller := taller - diff

            // Don't add new rod to anything
            newDp[diff] = max(newDp[diff], taller)
            
            // Add new rod to taller rod
            diff1 := diff + rod
            newDp[diff1] = max(newDp[diff1], taller + rod)

            // Add new rod to smaller rod
            diff2 := abs(smaller + rod - taller)
            newTaller := max(smaller + rod, taller)
            newDp[diff2] = max(newDp[diff2], newTaller)
        }
        dp = newDp
    }

    return dp[0]
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func abs(a int) int {
    if a < 0 {
        return -a
    }
    return a
}
