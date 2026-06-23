func maximumScore(nums []int, mul []int) int {
    n := len(nums)
    m := len(mul)
    
    prev, current := make([]int, n), make([]int, n)
    
    for k := m-1; k >= 0; k-- {
        mpl := mul[k]
        if k == m - 1 {
            for head := 0; head <= k; head++ {
                tail := head + n - k - 1
                current[head] = max(nums[head] * mpl, nums[tail] * mpl)
            }
        } else {
            for head := 0; head <= k; head++ {
                tail := head + n - k - 1
                current[head] = max(nums[head] * mpl + prev[head+1], nums[tail] * mpl + prev[head])
            }
        }
        
        prev, current = current, prev
    }
    
    return prev[0]
}

func max(a, b int) int {
    if a < b {
        return b
    }
    return a
}
