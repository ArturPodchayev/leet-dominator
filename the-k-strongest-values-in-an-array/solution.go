func getStrongest(arr []int, k int) []int {
    n := len(arr)
    sort.Ints(arr)
    centre := arr[(n-1)/2]

    sort.Slice(arr, func(i, j int) bool {
        if abs(arr[i]-centre) == abs(arr[j]-centre) {
            return arr[i] > arr[j]
        }
        return abs(arr[i]-centre) > abs(arr[j]-centre)
    })

    return arr[:k]
}

func abs(n int) int {
    if n > 0 {
        return n
    }
    return -n
}
