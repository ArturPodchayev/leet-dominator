func uniqueXorTriplets(nums []int) int {
    if len(nums) <= 2 {
        return len(nums)
    }
    n, result := len(nums), 1
    for n > 0 {
        result *= 2
        n /= 2
    }
    return result
}
