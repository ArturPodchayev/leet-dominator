func maxTotal(nums []int, s string) int64 {
    last_zero := -1
    N := len(s)
    res := int64(0)
    for i := range N {
        if s[i] == '0' {
            last_zero = i
        } else {
            if last_zero != -1 {
                if nums[last_zero] > nums[i] {
                    res += int64(nums[last_zero])
                    last_zero = i
                } else {
                    res += int64(nums[i])
                }
            } else {
                res += int64(nums[i])
            }
        }
    }
    return res
}
