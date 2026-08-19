func getWinner(arr []int, k int) int {
    left  := 0
    right := 1
    count := 0
    for right < len(arr) {
        if arr[left] > arr[right] {
            count++
            right++
        } else {
            arr[left] = arr[right]
            right++
            count = 1
        }
        if count == k {
            return arr[left]
        }
    }
    return arr[left]
}
