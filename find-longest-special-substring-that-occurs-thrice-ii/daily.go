func findTheDistanceValue(arr1 []int, arr2 []int, d int) (r int) {
    for i := 0; i < len(arr1); i++{
        b := true
        for j := 0; j < len(arr2); j++{
            x := 0
            if arr1[i] < arr2[j] {
                x = arr2[j] - arr1[i]
            } else {
                x = arr1[i] - arr2[j]
            }
            if x <= d {
                b = false
            }
        }
        if b {
            r++
        }
    }
    return
}
