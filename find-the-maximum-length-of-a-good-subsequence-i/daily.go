func firstStableIndex(nums []int, k int) int {
    for i := range nums {
        left, right := nums[0:i+1], nums[i:len(nums)]
        stability := slices.Max(left) - slices.Min(right)
        if stability <= k {
            return i
        }
    }
    return -1
}
