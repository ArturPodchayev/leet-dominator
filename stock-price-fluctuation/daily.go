func maxAlternatingSum(nums []int) int64 {
    for i,_ := range nums {
        if nums[i] < 0 {
            nums[i] = -nums[i]
        }
    }
    sort.Ints(nums)
    var result int64
    for i := 0; i < len(nums)/2; i++ {
        result -= int64(nums[i]*nums[i])
    }
    for i := len(nums)/2; i < len(nums); i++ {
        result += int64(nums[i]*nums[i])
    }
    return result
}
