func sumCounts(nums []int) int {
    ans := 0
    n:=len(nums)
    for i :=0;i<n;i++ {
        s:=make([]bool,101)
        k := 0
        for j:=i;j<n;j++{
            if !s[nums[j]] {
                s[nums[j]] = true
                k++
            }
            ans += k * k
        }
    }
    return ans
}
