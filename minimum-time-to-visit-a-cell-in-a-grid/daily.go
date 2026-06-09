func maxTotalValue(nums []int, k int) int64 {
    mn,mx := nums[0], nums[0]
    for _,n := range nums {
        if n < mn { mn = n }
        if n > mx { mx = n }
    }
    return (int64(mx) - int64(mn)) * int64(k)
}
