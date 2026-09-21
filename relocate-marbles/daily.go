func resultArray(nums []int, k int) []int64 {
    res := make([]int64, k)

    solve := func(nums []int, k int) {
        temp := make([]int, k)
        for i := 0; i < len(nums); i++ {
            temp2 := make([]int, k)
            for j := 0; j < len(temp); j++ {
                temp2[(nums[i]*j)%k] += temp[j]
            }
            temp2[nums[i]%k]++
            temp = temp2
            for j := 0; j < len(temp); j++ {
                res[j] += int64(temp[j])
            } 
        }
    }
    solve(nums, k)
        
    return res
}
