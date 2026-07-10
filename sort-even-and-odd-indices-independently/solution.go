func sortEvenOdd(nums []int) []int {
    for t := 0; t < len(nums); t++ {
        for i := 2; i < len(nums); i++ {
            if i%2 == 0 {
                if nums[i] < nums[i-2] {
                    nums[i], nums[i-2] = nums[i-2], nums[i]
                }
            } else {
                if nums[i] > nums[i-2] {
                    nums[i], nums[i-2] = nums[i-2], nums[i]
                }
            }
        }
    }
    return nums
}
