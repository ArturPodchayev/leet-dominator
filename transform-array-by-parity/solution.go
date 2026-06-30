import "sort"
func transformArray(nums []int) []int {
    for i, n := range nums {
        if n % 2 == 0 {
            nums[i] = 0
        } else {
            nums[i] = 1
        }
    }
    sort.Ints(nums)
    return nums
}
