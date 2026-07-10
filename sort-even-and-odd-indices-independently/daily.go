func pathExistenceQueries(n int, nums []int, maxDiff int, queries [][]int) []int {
    order := make([]int, n)
    for i := range order { order[i] = i }
    sort.Slice(order, func(i, j int) bool { return nums[order[i]] < nums[order[j]] })

    pos := make([]int, n)
    val := make([]int, n)
    for i, o := range order {
        pos[o] = i
        val[i] = nums[o]
    }

    reach := make([]int, n)
    j := 0
    for i := 0; i < n; i++ {
        if j < i { j = i }
        for j+1 < n && val[j+1]-val[i] <= maxDiff { j++ }
        reach[i] = j
    }

    comp := make([]int, n)
    for i := 1; i < n; i++ {
        comp[i] = comp[i-1]
        if val[i]-val[i-1] > maxDiff { comp[i]++ }
    }

    LOG := 1
    for (1 << LOG) < n { LOG++ }
    jump := make([][]int, LOG)
    jump[0] = make([]int, n)
    copy(jump[0], reach)
    for k := 1; k < LOG; k++ {
        jump[k] = make([]int, n)
        for i := 0; i < n; i++ {
            jump[k][i] = jump[k-1][jump[k-1][i]]
        }
    }

    ans := make([]int, len(queries))
    for qi, q := range queries {
        pu, pv := pos[q[0]], pos[q[1]]
        if comp[pu] != comp[pv] { ans[qi] = -1; continue }
        if pu == pv { ans[qi] = 0; continue }
        if pu > pv { pu, pv = pv, pu }
        dist, cur := 0, pu
        for k := LOG - 1; k >= 0; k-- {
            if jump[k][cur] < pv { cur = jump[k][cur]; dist += 1 << k }
        }
        if cur < pv { dist++ }
        ans[qi] = dist
    }
    return ans
}
