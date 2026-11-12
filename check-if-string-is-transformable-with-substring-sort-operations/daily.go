func longestMonotonicSubarray(nums []int) int {
    n := len(nums)
    inc, dec, mx := 1, 1, 1
    for i := 1; i < n; i++ {
        if nums[i - 1] < nums[i] { // increasing
            inc++
            dec = 1
        } else if nums[i - 1] > nums[i] { // decreasing
            inc = 1
            dec++
        } else { // equal code
            inc, dec = 1, 1
        }
        mx = max(mx, inc)
        mx = max(mx, dec)
    }
    return mx;

}
