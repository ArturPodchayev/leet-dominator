func canAliceWin(nums []int) bool {
    var a, b int
    for _, n := range nums {
        if n < 10 {
            a += n
        } else {
            b += n
        }
    }
    return a != b
}
