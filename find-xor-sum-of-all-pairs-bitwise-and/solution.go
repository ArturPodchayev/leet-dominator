func xoreduce(arr []int) int {
    xor := arr[0]
    for i := 1; i < len(arr); i++ {
        xor ^= arr[i]
    }
    return xor
}

func getXORSum(arr1 []int, arr2 []int) int {
    xor2 := xoreduce(arr2)
    for i, v := range arr1 {
        arr1[i] = v & xor2
    }
    return xoreduce(arr1)
}
