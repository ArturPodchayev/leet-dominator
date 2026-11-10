type pair struct {
    idx, soldiers int
}

func kWeakestRows(mat [][]int, k int) []int {

    rows := []pair{}

    for idx, row := range mat {
        soldiers := 0
        for _, val := range row {
            if val == 0 {
                break
            }
            soldiers += 1
        }
        rows = append(rows, pair{idx, soldiers})
    }

    sort.SliceStable(rows, func(i, j int) bool {
        return rows[i].soldiers < rows[j].soldiers
    })

    // sort.Slice(rows, func(i, j int) bool {
    //     if rows[i].soldiers == rows[j].soldiers {
    //         return rows[i].idx < rows[j].idx
    //     }
    //     return rows[i].soldiers < rows[j].soldiers
    // })

    res := []int{}

    for i := 0; i < k; i++ {
        res = append(res, rows[i].idx)
    }

    return res
}
