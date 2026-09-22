type SegmentTree struct {
    Prefix [][]int
    Remainder []int
    K int
}

func (t *SegmentTree) SumPref(l, r, v, tl, tr int) []int {
    res := make([]int, t.K)
    if l > r {
        return res
    }

    if l == tl && r == tr {
        return t.Prefix[v]
    }

    mid := (tl+tr)/2
    remainderLeft := t.SumRemainder(l, min(r, mid), 2*v+1, tl, mid)
    prefixLeft := t.SumPref(l, min(r, mid), 2*v+1, tl, mid)
    prefixRight := t.SumPref(max(l, mid+1), r, 2*v+2, mid+1, tr)

    for i := 0; i < t.K; i++ {
        if remainderLeft != -1 {
            res[i] += prefixLeft[i]
            res[remainderLeft*i% t.K] += prefixRight[i]
        } else {
            res[i] = prefixRight[i]
        }
    }

    return res
}

func (t *SegmentTree) SumRemainder(l, r, v, tl, tr int) int {
    if l > r {
        return -1
    }

    if l == tl && r == tr {
        return t.Remainder[v]
    }

    mid := (tl+tr)/2
    remainderLeft := t.SumRemainder(l, min(r, mid), 2*v+1, tl, mid)
    remainderRight := t.SumRemainder(max(l, mid+1), r, 2*v+2, mid+1, tr)

    if remainderLeft == -1 {
        return remainderRight
    } 
    if remainderRight == -1 {
        return remainderLeft
    }

    return remainderLeft*remainderRight % t.K
}

func (t *SegmentTree) Update(v, tl, tr int, idx, val int) {
    if tl==tr && tl == idx {
        t.Remainder[v] = val % t.K
        for i := 0; i < t.K; i++ {
            t.Prefix[v][i] = 0
        }
        t.Prefix[v][val%t.K] = 1
        return
    }

    mid := (tl+tr)/2
    if idx <= mid {
        t.Update(2*v+1, tl, mid, idx, val)
    } else {
        t.Update(2*v+2, mid+1, tr, idx, val)
    }
    
    t.Remainder[v] = t.Remainder[2*v+1]*t.Remainder[2*v+2] % t.K
    for i := 0; i < t.K; i++ {
        t.Prefix[v][i] = 0
    }

    for i := 0; i < t.K; i++ {
        t.Prefix[v][i] += t.Prefix[2*v+1][i]
        t.Prefix[v][i * t.Remainder[2*v+1] % t.K] += t.Prefix[2*v+2][i]
    }
}

func resultArray(nums []int, k int, queries [][]int) []int {
    pref := make([][]int, len(nums)*4)
    remainder := make([]int, len(nums)*4)

    for i := 0; i <len(nums)*4; i++ {
        pref[i] = make([]int, k)
    }

    // fmt.Println(pref, remainder, k)
    tree := &SegmentTree{pref, remainder,  k}
    for i := 0; i < len(nums); i++ {
        tree.Update(0, 0, len(nums)-1, i, nums[i])
    }

    res := make([]int, len(queries))
    for i, query := range queries {
        // fmt.Println("Before ", pref, remainder)
        tree.Update(0, 0, len(nums)-1, query[0], query[1])
        // fmt.Println("After ", pref, remainder)
        tmp := tree.SumPref(query[2], len(nums)-1, 0, 0, len(nums)-1)
        // fmt.Println(tmp)
        res[i] = tmp[query[3]]
    }

    return res
}

func max(a, b int ) int {
    if a < b { return b }
    return a
}

func min(a, b int ) int {
    if a > b { return b }
    return a
}
