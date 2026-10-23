func sortPermutation(nums []int) int {
    var num *int

    for i := 0; i < len(nums); i++ {
        if nums[i] != i && num == nil {
            num = &nums[i]
        } else if nums[i] != i {
            *num &= nums[i]
        }
    }
    
    if num == nil {return 0}
    return *num
}
