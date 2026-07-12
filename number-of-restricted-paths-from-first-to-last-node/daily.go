func arrayRankTransform(arr []int) []int {
    arrCopy := slices.Clone(arr)
    slices.Sort(arrCopy)
    arrCopy = slices.Compact(arrCopy)

    ranks := make(map[int]int)
    for idx, num := range arrCopy {
        ranks[num] = idx + 1
    }

    for idx, num := range arr {
        arr[idx] = ranks[num]
    }

    return arr
}
