func maximalNetworkRank(n int, roads [][]int) int {
    cr := make([]int, n)
    dr := make(map[[2]int]bool)
    for _, r := range roads {
        cr[r[0]]++
        cr[r[1]]++
        if r[0] < r[1] {
            dr[[2]int{r[0], r[1]}] = true
        } else {
            dr[[2]int{r[1], r[0]}] = true
        }
    }
    rank := 0
    for i := 0; i < n; i++ {
        for j := i + 1; j < n; j++ {
            h := cr[i] + cr[j]
            if dr[[2]int{i, j}] {
                h--
            }
            if h > rank {
                rank = h
            }
        }
    }
    return rank
}
