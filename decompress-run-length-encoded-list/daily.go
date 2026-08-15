func longestSubsequence(nums []int) int {
    xored := 0
    hasNonZero := false
    for _, v := range nums {
        xored ^= v
        if v != 0 {
            hasNonZero = true
        }
    }

    if xored != 0 {
        return len(nums)
    }

    if !hasNonZero {
        return 0
    }

    return len(nums) - 1
}
