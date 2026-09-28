func maximumTotalSum(arr []int) int64 {
    sort.Ints(arr)
    lastAssinged := arr[len(arr)-1]
    var sum int64 = int64(lastAssinged)
    for i := len(arr)-2; i>=0; i--{
        if arr[i] >= lastAssinged {
            lastAssinged--
        }else {
            lastAssinged=arr[i]
        }
        if lastAssinged <= 0 {
            return -1
        }
        sum+=int64(lastAssinged)
    }
    return sum
}
