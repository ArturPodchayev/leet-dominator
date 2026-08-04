func findMissingElements(nums []int) []int {
    sort.Ints(nums)
    res := []int{}
    j := 0
    for i := nums[0]; i <= nums[len(nums)-1]; i++ {
        if i != nums[j] {
            res = append(res, i)
            continue
        }
        j++
    }
    return res
}
